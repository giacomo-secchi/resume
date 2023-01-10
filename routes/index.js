const express = require('express');
const i18next = require('i18next');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  let lng = req.language // 'de-CH'
  let lngs = req.languages // ['de-CH', 'de', 'en']
  let template = 'index';
  // req.i18n.changeLanguage('en') // will not load that!!! assert it was preloaded

  if (lng) {
    i18next.changeLanguage(lng, (err, t) => {
      if (err) {
        return res.status(500).send(err);
      }

      let sections = i18next.t('sections', { returnObjects: true });
      res.render(template, { lang: i18next.language, sections, t });
    });
  } else {
    res.render(template, { t: i18next.t });
  }

  // var exists = req.i18n.exists('myKey')
  // var translation = req.t('myKey')
});

module.exports = router;
