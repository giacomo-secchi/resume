const i18next = require('i18next');
const middleware = require('i18next-http-middleware');
const Backend = require('i18next-fs-backend');

// Initialize i18next
i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    // debug: true,
    fallbackLng: 'en',
    detection: {
      order: ['querystring', 'cookie', 'header'],
      lookupQuerystring: 'lang',
      caches: ['cookie']
    },
    preload: ['en', 'it'],
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
    },
      // ...otherOptions
  });

module.exports = i18next;
 