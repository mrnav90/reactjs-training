import UniversalCookie from 'universal-cookie';

const cookie = new UniversalCookie();

export function setLanguage(key) {
  cookie.set('language', key);
}

export function getLanguage() {
  return cookie.get('language');
}

export {
  translationWithStore,
  translate
} from './translation';
