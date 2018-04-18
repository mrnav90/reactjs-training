import langEn from 'i18n/en.json';
import langVi from 'i18n/vi.json';

const REQUEST_HEADER = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};
const I18N_DATA = {
  en: langEn,
  vi: langVi
};
const DEFAULT_LANGUAGE = 'vi';

export {
  REQUEST_HEADER,
  I18N_DATA,
  DEFAULT_LANGUAGE
};
