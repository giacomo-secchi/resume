const express = require( 'express' );
const fs = require( 'fs' );
const glob = require( 'glob' );

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');


languages = {};


glob.sync( './languages/*.json' ).forEach( ( file ) => {
  const regex = RegExp('languages/(.*).json', 'g');  
  let ISOcode = regex.exec(file)[1];

  fs.readFile(file, function(err, data) {
    languages[ISOcode] = JSON.parse( data.toString() );
  });

});

app.get( '/:lang', ( req, res ) => {
  let currentLang = req.params['lang'];
   
  if ( languages.hasOwnProperty(currentLang) ) {
    for (var key of Object.keys(languages[currentLang])) {
      res.render('index', { title: languages[currentLang][key], message: 'Hello there!' })
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});