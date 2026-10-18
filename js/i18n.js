// 말 바꾸기 — 한국어 · 영어. 화면 코드의 한국어 문장이 그대로 열쇠다(t('체온 기록했어요.')).
//
// 영어 뜻은 js/en.js 에. 빠진 열쇠는 한국어 그대로 보인다 — 시험(tests/i18n.test.mjs)이 화면 코드의 t('…') 와
// 자료(성분 · 제품 · 증상 이름)를 모두 en.js 에서 찾는다. 바꿀 값은 {이름} 으로 넣는다(열쇠 안에 ${} 를 쓰지 않는다).
// 영어 뜻에서 {n|dose|doses} 는 「1 dose」 · 「3 doses」.
// 저장하는 값(증상 표 · 잰 곳 · 약 이름)은 늘 한국어 — 다른 말로 쓰는 가족 휴대폰과 합쳐도 같게. 보일 때만 바꾼다.

import { EN } from './en.js';

export const LANGS = { auto: '자동', ko: '한국어', en: 'English' };

let current = 'ko';

/** 설정(auto · ko · en) → 실제 말. 자동이면 브라우저 말이 한국어일 때만 한국어. */
export function resolve(setting, languages = globalThis.navigator?.languages || [globalThis.navigator?.language || 'ko']) {
  if (setting === 'ko' || setting === 'en') return setting;
  const first = String(languages[0] || 'ko').toLowerCase();
  return first.startsWith('ko') ? 'ko' : 'en';
}

export const lang = () => current;
export const isEn = () => current === 'en';
export function setLang(next) { current = next === 'en' ? 'en' : 'ko'; }

/** 잠시 다른 말로 — 진료용 요약을 한국어로 보여 줄 때. */
export function withLang(next, fn) {
  const before = current;
  setLang(next);
  try { return fn(); } finally { current = before; }
}

const fill = (text, vars) => (vars ? text.replace(/\{(\w+)(?:\|([^|}]*)\|([^}]*))?\}/g, (m, k, one, many) => {
  if (!(k in vars)) return m;
  return one === undefined ? String(vars[k]) : `${vars[k]} ${Number(vars[k]) === 1 ? one : many}`;
}) : text);

export function t(ko, vars) {
  const text = current === 'en' && Object.prototype.hasOwnProperty.call(EN, ko) ? EN[ko] : ko;
  return fill(text, vars);
}

/** 사람이 넣은 값일 수 있는 이름(약 이름 · 기본 약) — 아는 이름만 바꾸고 나머지는 그대로. */
export const name = (text) => (current === 'en' && text && Object.prototype.hasOwnProperty.call(EN, text) ? EN[text] : text || '');
