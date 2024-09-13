import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './src/locales/en/translation.json';
import deTranslations from './src/locales/de/translation.json';

const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      de: { translation: deTranslations },
    },
    lng: savedLanguage, // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;