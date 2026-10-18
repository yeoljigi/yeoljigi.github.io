// 영어 — 빠진 말 · 바꿀 값 · 안전 말 · 영어로 낸 글에 한국어가 남지 않는지 — node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as dose from '../js/dose.js';
import * as store from '../js/store.js';
import * as i18n from '../js/i18n.js';
import { EN, HELP_EN } from '../js/en.js';
import { doseMessage, summary } from '../js/report.js';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const SCREEN = ['js/app.js', 'js/sheets.js', 'js/report.js', 'js/notify.js', 'js/chart.js', 'js/ui.js', 'js/dose.js'];
const HANGUL = /[가-힣]/;
const vars = (text) => [...text.matchAll(/\{(\w+)(?:\|[^}]*)?\}/g)].map((m) => m[1]).sort();
const inEn = (fn) => i18n.withLang('en', fn);

async function screenKeys() {
  const keys = [];
  for (const path of SCREEN) {
    for (const m of (await read(path)).matchAll(/\bt\(\s*(['"`])((?:\\.|(?!\1).)*)\1/g)) keys.push({ path, key: m[2].replace(/\\'/g, "'") });
  }
  return keys;
}

test('화면 코드의 t(…) 열쇠가 모두 영어에 있다 · 열쇠 안에 ${} 를 쓰지 않는다', async () => {
  const keys = await screenKeys();
  assert.ok(keys.length > 300, '열쇠를 읽지 못했다');
  for (const { path, key } of keys) {
    assert.ok(!key.includes('${'), `${path}: 열쇠 안의 \${} — {이름} 으로 넘긴다: ${key}`);
    assert.ok(Object.hasOwn(EN, key), `${path}: 영어 없음 — ${key}`);
  }
});

test('자료 이름(성분 · 설명서 문구 · 제품 · 체온 구간 · 잰 곳 · 증상 · 아이 상태 · 기본 약)이 모두 영어에 있다', async () => {
  const names = [
    ...Object.values(dose.GROUPS).map((g) => g.name),
    ...Object.values(dose.INGREDIENTS).flatMap((i) => [i.name, ...Object.values(i.label)]),
    ...dose.PRODUCTS.flatMap((p) => [p.name, p.note].filter(Boolean)),
    ...dose.LEVELS.map((l) => l.label),
    ...store.SITES, ...store.SYMPTOMS, ...store.EVENTS, ...store.WELLBEING, ...Object.values(store.TEXT_SIZES),
    ...store.DEFAULT_MEDS.map((m) => m.name), i18n.LANGS.auto, 'mL', '개',
  ];
  for (const n of names) assert.ok(Object.hasOwn(EN, n), `영어 없음 — ${n}`);
  // 탭 이름 · 식약처 권고 문구는 app.js 의 상수
  const app = await read('js/app.js');
  for (const v of JSON.parse(`[${/const VIEWS = \{([^}]*)\}/.exec(app)[1].replace(/\w+: /g, '').replace(/'/g, '"')}]`)) {
    assert.ok(Object.hasOwn(EN, v), `탭 영어 없음 — ${v}`);
  }
  assert.ok(Object.hasOwn(EN, /const NOT_DEVICE = '([^']+)'/.exec(app)[1]), '식약처 권고 문구 영어 없음');
});

test('영어 뜻의 바꿀 값이 한국어 열쇠와 같다 · 영어에 한국어가 섞이지 않는다', () => {
  for (const [ko, en] of Object.entries(EN)) {
    assert.deepEqual(vars(en), vars(ko), `바꿀 값이 다르다 — ${ko} → ${en}`);
    assert.ok(!HANGUL.test(en), `영어에 한국어 — ${en}`);
  }
});

// 0.7.0 「안전」(CLAUDE.md) — 영어로도 먹일 양 · 다음 먹일 시각을 정해 주는 말을 쓰지 않는다
test('판정 · 처방 말이 영어에도 없다', () => {
  const banned = [/recommend/i, /you can give/i, /can be given/i, /safe to give/i, /ok(ay)? to give/i, /available now/i,
    /next dose (at|from|in)/i, /it'?s (fine|ok(ay)?)\b/i, /remaining (dose|amount)/i];
  const help = Object.values(HELP_EN).map((fn) => fn({ repo: '', sponsor: '', version: '', notDevice: '' }));
  for (const text of [...Object.values(EN), ...help]) {
    for (const word of banned) assert.doesNotMatch(text, word);
  }
  for (const text of help) assert.ok(!HANGUL.test(text.replace(/<span lang="ko">[^<]*<\/span>/g, '')), `도움말에 한국어 — ${text.slice(0, 60)}`);
});

test('말 고르기 — 자동이면 브라우저 말이 한국어일 때만 한국어', () => {
  assert.equal(i18n.resolve('auto', ['ko-KR', 'en']), 'ko');
  assert.equal(i18n.resolve('auto', ['en-US', 'ko']), 'en');
  assert.equal(i18n.resolve('auto', ['ja-JP']), 'en');
  assert.equal(i18n.resolve('ko', ['en-US']), 'ko');
  assert.equal(i18n.resolve('en', ['ko-KR']), 'en');
  assert.equal(i18n.lang(), 'ko');
  assert.equal(inEn(() => i18n.t('저장')), 'Save');
  assert.equal(i18n.lang(), 'ko', 'withLang 뒤에는 돌아온다');
  assert.equal(inEn(() => i18n.t('{n}일', { n: 1 })), '1 day');
  assert.equal(inEn(() => i18n.t('{n}일', { n: 3 })), '3 days');
  assert.equal(inEn(() => i18n.name('우리 집 시럽')), '우리 집 시럽', '사람이 넣은 이름은 그대로');
  assert.equal(inEn(() => i18n.name('챔프시럽')), 'Champ Syrup');
  assert.equal(store.normalize({ settings: { lang: 'fr' } }).settings.lang, 'auto');
});

test('바꾸기로 불러와도 말은 이 휴대폰의 것', () => {
  store._setState({ children: [{ id: 'c1', name: 'Hayul' }], settings: { lang: 'en' } });
  store.importJson(JSON.stringify({ app: 'yeoljigi', children: [{ id: 'c9', name: 'Seoa' }], settings: { lang: 'ko' } }));
  assert.equal(store.get().settings.lang, 'en');
});

test('영어로 낸 안내 · 요약 · 가족에게 글에 한국어가 남지 않는다(저장은 한국어 그대로)', () => {
  const now = new Date('2026-10-18T12:00:00+09:00');
  const iso = (h) => new Date(now.getTime() - h * 3600e3).toISOString();
  const child = { id: 'c1', name: 'Hayul', birth: '2026-08-01', weight: 13.2, seizure: true, note: 'amoxicillin allergy' };
  const history = [
    { type: 'temp', temp: 38.6, at: iso(30), site: '귀', wellbeing: 2 },
    { type: 'temp', temp: 39.4, at: iso(3), site: '이마', wellbeing: 1 },
    { type: 'med', medId: 'm-ibu', name: '챔프이부펜시럽', ingredient: 'ibuprofen', amount: 5, unit: 'mL', mg: 100, at: iso(2.5) },
    { type: 'med', name: '복합써스펜좌약 125mg', ingredient: 'acetaminophen', amount: 1, unit: '개', mg: 125, at: iso(1.5) },
    { type: 'symptom', tags: ['경련', '구토', '수두'], memo: '', at: iso(1) },
    { type: 'symptom', tags: ['소변 봄'], memo: '', at: iso(9) },
    { type: 'symptom', tags: ['물 마심'], memo: '', at: iso(0.5) },
  ];
  inEn(() => {
    const texts = [
      ...[34, 36.5, 37.6, 38.5, 40.2].map((t) => dose.careTip(t)),
      ...dose.alertsFor(child, history, now).flatMap((a) => [a.title, a.body]),
      ...dose.alertsFor({ birth: '2026-09-01' }, history, now).flatMap((a) => [a.title, a.body]),
      ...dose.checkDose({ ingredient: 'ibuprofen', at: now, history, months: 2, medId: 'm-ibu', medMaxPerDay: 1, medMinAgeMonths: 24 })
        .messages.map((m) => m.text),
      ...dose.checkDose({ ingredient: 'acetaminophen', at: now, history, months: 30 }).messages.map((m) => m.text),
      dose.ageLabel(5), dose.ageLabel(30), dose.ageLabel(36),
      summary(child, history, now), doseMessage(child, history[2], history, now),
    ];
    for (const text of texts) assert.ok(text && !HANGUL.test(text), `한국어가 남음 — ${text}`);
    assert.match(summary(child, history, now), /Champ Ibupen Syrup 5mL \(Ibuprofen 100mg\)/);
    assert.match(summary(child, history, now), /Suspen Compound Suppository 125mg 1pc/);
  });
  // 같은 기록을 한국어로 — 그대로
  assert.match(summary(child, history, now), /챔프이부펜시럽 5mL \(이부프로펜 100mg\)/);
  assert.match(i18n.withLang('ko', () => summary(child, history, now)), /최근 72시간 기록/);
});
