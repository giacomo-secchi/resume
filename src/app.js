const express = require('express');
const fs = require('fs');
const glob  = require('glob');


const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.use(express.static('dist'));



let languages = {};


glob.sync( './languages/*.json' ).forEach( ( file ) => {
  const regex = RegExp('languages/(.*).json', 'g');  
  let ISOcode = regex.exec(file)[1];

  fs.readFile(file, function(err, data) {
    languages[ISOcode] = JSON.parse( data.toString() );
  });

});
 

app.get('/', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
});

app.get( '/:lang', ( req, res ) => {
  let ISOcode = req.params['lang'];
  let template = 'index';
  let content;

  if ( ! languages.hasOwnProperty(ISOcode) )  {
    res.status(404); 
    template = 'error';
    res.render(template);
    return;
  };

  content = { 
    lang: ISOcode,
    title: languages[ISOcode].title,
    nav_button: languages[ISOcode].download_button,
    download_button: languages[ISOcode].download_file,
    sections: languages[ISOcode].sections
  };
  
  res.render(template, content);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});