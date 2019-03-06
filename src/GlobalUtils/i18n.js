import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .init({
    debug: false,
    react: { wait: true },
    interpolation: { escapeValue: false },
    fallbackLng: localStorage.language ? localStorage.language : 'zh-TW', // eslint-disable-line
  });

export default i18n;
