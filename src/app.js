const express = require( 'express' );
const http = require('http');
const https = require('https');
const fs = require( 'fs' );
const glob = require( 'glob' );


const app = express();
const port = process.env.PORT || 3000;

// Create our HTTPS server options
// Get our key and cert
// const key = fs.readFileSync('/certs/cert.key');
// const cert = fs.readFileSync('/certs/cert.crt');

// // Create our servers
// https.createServer({key, cert}, app).listen(443);
// http.createServer(app).listen(80);

app.set('view engine', 'pug');
app.use(express.static('dist'));



 

languages = {};


glob.sync( './languages/*.json' ).forEach( ( file ) => {
  const regex = RegExp('languages/(.*).json', 'g');  
  let ISOcode = regex.exec(file)[1];

  fs.readFile(file, function(err, data) {
    languages[ISOcode] = JSON.parse( data.toString() );
  });

});

app.get( '/:lang', ( req, res ) => {
  let ISOcode = req.params['lang'];

  console.log(languages[ISOcode].sections);
    
  if ( languages.hasOwnProperty(ISOcode) ) {
    for (var key of Object.keys(languages[ISOcode])) {

       res.render('index', { 
        lang: ISOcode,
        title: languages[ISOcode][key],
        nav_button: languages[ISOcode].download_button,
        sections: languages[ISOcode].sections,
        message: 'Hello there!' });        
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});