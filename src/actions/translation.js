import {I18n} from 'react-i18nify';
import {ACTION_TYPES, DEFAULT_LANGUAGE, I18N_DATA} from 'constants';
import {setLanguage, getLanguage} from 'utils';

export function translations() {
  I18n.forceComponentsUpdate();
  return {
    type: ACTION_TYPES.LOAD_TRANSLATIONS,
    translations: I18N_DATA
  };
}

export function preferredLanguage() {
  I18n.forceComponentsUpdate();
  return {
    type: ACTION_TYPES.SET_DEFAULT_LANGUAGE,
    locale: getLanguage() ? getLanguage() : DEFAULT_LANGUAGE
  };
}

export function changeLanguage(locale) {
  I18n.forceComponentsUpdate();
  setLanguage(locale);
  return {
    type: ACTION_TYPES.CHANGE_LANGUAGE,
    locale: locale
  };
}
