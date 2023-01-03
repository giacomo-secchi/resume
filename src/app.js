const express = require('express');
const fs = require('fs');
const glob  = require('glob');
const i18next = require('i18next');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('dist'));
app.use(express.static('public'));


i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    backend: {
      loadPath: __dirname + '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['querystring', 'cookie'],
      caches: ['cookie']
    },
    fallbackLng: 'en',
    preload: ['en', 'it']
  });

app.use(i18nextMiddleware.handle(i18next, {
  removeLngFromUrl: false
}));



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// let languages = {};


// glob.sync( './languages/*.json' ).forEach( ( file ) => {
//   const regex = RegExp('languages/(.*).json', 'g');  
//   let ISOcode = regex.exec(file)[1];

//   fs.readFile(file, function(err, data) {
//     languages[ISOcode] = JSON.parse( data.toString() );
//   });

// });
 

app.get('/', (req, res) => {
  res.status(200);
  res.send(response);
});

// app.get( '/:lang', ( req, res ) => {
//   let ISOcode = req.params['lang'];
//   let template = 'index';
//   let content;

//   if ( ! languages.hasOwnProperty(ISOcode) )  {
//     res.status(404); 
//     template = 'error';
//     res.render(template);
//     return;
//   };
  

//   content = { 
//     lang: ISOcode,
//     title: languages[ISOcode].title,
//     privacy: languages[ISOcode].privacy_text,
//     nav_button: languages[ISOcode].download_button,
//     download_button: languages[ISOcode].download_file,
//     sections: languages[ISOcode].sections
//   };
  
//   res.render(template, content);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});