const express = require( 'express' );
const fs = require( 'fs' );
const glob = require( 'glob' );



// fetch("http://example.com/api/endpoint", {
//   method: 'POST',
//   mode: 'cors', // no-cors, *cors, same-origin
//   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//   credentials: 'same-origin', // include, *same-origin, omit
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   redirect: 'follow', // manual, *follow, error
//   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//   body: JSON.stringify(data) // body data type must match "Content-Type" header
// })
// .then((body) => {
//   fs.writeFile('doc_raptor_sample.pdf', body, "binary", function(writeErr) {
//     console.log('Saved!');
//   });
// })
//   .catch(function (err) {
//     console.log("Unable to fetch -", err);
//   });


const app = express();
const port = process.env.PORT || 3000;

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
   
  if ( languages.hasOwnProperty(ISOcode) ) {
    for (var key of Object.keys(languages[ISOcode])) {

      res.render('index', { 
        lang: ISOcode,
        title: languages[ISOcode][key],
        nav_button: languages[ISOcode].download_button,
        section1_title: languages[ISOcode].section1_title,
        section1_description: languages[ISOcode].section1_description,
        message: 'Hello there!' });
    }
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});