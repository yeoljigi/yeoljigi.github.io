// 진료용 요약 — 병원에서 의사에게 보여 주거나 카카오톡으로 보낼 글. 최근 72시간.

import {
  DAY, GROUPS, HOUR, INGREDIENTS, ONE_TAP_TAGS, URINE_TAG, WATER_TAG, ageLabel, ageMonths, feverEpisode, groupLog, lastUrine,
} from './dose.js';
import { name, t } from './i18n.js';
import { WELLBEING } from './store.js';
import { clock, fmt1, fmtAmount } from './ui.js';

export function summary(child, entries, now = new Date(), hours = 72) {
  const from = now.getTime() - hours * HOUR;
  const recent = entries.filter((e) => new Date(e.at).getTime() >= from).sort((a, b) => (a.at < b.at ? -1 : 1));
  const temps = recent.filter((e) => e.type === 'temp');
  const meds = recent.filter((e) => e.type === 'med');
  // 「소변 봄」 · 「물 마심」만 있는 기록은 증상 목록 대신 한 줄로 센다
  const oneTap = (e) => e.type === 'symptom' && (e.tags || []).length > 0 && e.tags.every((t) => ONE_TAP_TAGS.includes(t)) && !e.memo;
  const tagged = (tag) => recent.filter((e) => e.type === 'symptom' && (e.tags || []).includes(tag));
  const pees = tagged(URINE_TAG);
  const drinks = tagged(WATER_TAG);
  const symptoms = recent.filter((e) => e.type === 'symptom' && !oneTap(e));
  const lines = [];
  const age = ageLabel(ageMonths(child.birth, now));
  const wb = (e) => t(WELLBEING[Number(e.wellbeing) - 1] || '');
  lines.push(`[${child.name}${age ? ` · ${age}` : ''}${child.weight ? ` · ${child.weight}kg` : ''}] ${t('최근 {h}시간 기록', { h: hours })}`);

  if (child.seizure) lines.push(t('열성 경련 과거력 있음'));
  if (child.note) lines.push(t('참고: {note}', { note: child.note }));
  const ep = feverEpisode(entries, now);
  if (ep) lines.push(t('열 시작: {at} ({h}시간째)', { at: stamp(ep.start), h: Math.max(1, Math.round(ep.hours)) }));
  if (temps.length) {
    const max = temps.reduce((m, e) => (Number(e.temp) > Number(m.temp) ? e : m));
    const last = temps[temps.length - 1];
    lines.push(t('최고 체온: {max}℃ ({maxAt}) · 마지막: {last}℃ ({lastAt})',
      { max: fmt1(max.temp), maxAt: stamp(max.at), last: fmt1(last.temp), lastAt: stamp(last.at) }));
  } else {
    lines.push(t('체온 기록 없음'));
  }
  if (pees.length) lines.push(t('소변 {n}번 · 마지막 {at}', { n: pees.length, at: stamp(pees[pees.length - 1].at) }));
  if (drinks.length) lines.push(t('물 마심 {n}번 · 마지막 {at}', { n: drinks.length, at: stamp(drinks[drinks.length - 1].at) }));

  if (meds.length) {
    lines.push('', t('해열제 {n}번', { n: meds.length }));
    for (const m of meds) {
      const ing = INGREDIENTS[m.ingredient];
      lines.push(`- ${stamp(m.at)} ${name(m.name) || t(ing?.name || '')} ${fmtAmount(m.amount)}${unitOf(m)} (${t(ing?.name || '')} ${m.mg}mg)`);
    }
  }
  if (temps.length) {
    lines.push('', t('체온'));
    for (const e of temps) {
      const note = [t(e.site || ''), wb(e)].filter(Boolean).join(' · ');
      lines.push(`- ${stamp(e.at)} ${fmt1(e.temp)}℃${note ? ` (${note})` : ''}`);
    }
  }
  if (symptoms.length) {
    lines.push('', t('증상'));
    for (const s of symptoms) lines.push(`- ${stamp(s.at)} ${(s.tags || []).map((x) => t(x)).join(', ')}${s.memo ? ` — ${s.memo}` : ''}`);
  }
  lines.push('', t('열지기 앱 기록'));
  return lines.join('\n');
}

/**
 * 해열제를 먹인 바로 뒤 가족에게 보낼 글 — 무엇을 얼마나 먹였고, 계열마다 마지막으로 먹인 때(다른 보호자가 또 먹이지 않게).
 * 다음에 먹일 시각은 적지 않는다(dose.js 머리말). 받는 사람이 나중에 읽을 수 있어 「몇 시 기준」을 함께 적는다.
 */
export function doseMessage(child, entry, history, now = new Date()) {
  const ing = INGREDIENTS[entry.ingredient];
  const lines = [`[${child.name}] ${t('{at} {med} {amount} 먹였어요', {
    at: stamp(entry.at), med: name(entry.name) || t(ing.name), amount: `${fmtAmount(entry.amount)}${unitOf(entry)}` })}`
    + ` (${t(ing.name)} ${entry.mg}mg)`];
  const temp = history.filter((e) => e.type === 'temp' && new Date(e.at) <= now).sort((a, b) => (a.at < b.at ? 1 : -1))[0];
  if (temp && now - new Date(temp.at) < 12 * HOUR) lines.push(t('마지막 체온 {temp}℃ ({at})', { temp: fmt1(temp.temp), at: stamp(temp.at) }));
  lines.push('', t('계열마다 마지막으로 먹인 때'));
  for (const g of Object.values(GROUPS)) {
    const l = groupLog(g.key, history, now);
    lines.push(`- ${t(g.name)}: ${l.last ? t('{at} (24시간 {n}번)', { at: stamp(l.last.at), n: l.countInDay }) : t('기록 없음')}`);
  }
  lines.push(t('다음 약은 포장 설명서의 간격을 확인하고 먹여 주세요.'));
  const pee = lastUrine(history, now);
  if (pee && now - new Date(pee.at) < DAY) lines.push(t('마지막 소변 {at}', { at: stamp(pee.at) }));
  lines.push('', t('{at} 기록 기준 · 열지기', { at: stamp(now) }));
  return lines.join('\n');
}

// 약 단위 — 저장은 mL · 개, 영어로는 개 → pc
const unitOf = (e) => t(e.unit || 'mL');

function stamp(at) {
  const d = new Date(at);
  return `${d.getMonth() + 1}/${d.getDate()} ${clock(d)}`;
}
