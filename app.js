const express = require('express');
const fs = require('fs');
const glob = require( 'glob' );

const app = express();
const port = process.env.PORT || 3000;


language = {};


glob.sync( './languages/*.json' ).forEach( function( errors, files ) {
  // let dash = files.split("/");
  // if(dash.length == 3) {
  //     let dot = dash[2].split(".");
  //   if(dot.length == 2) {
  //     let lang = dot[0];
  //     fs.readFile(file, function(err, data) {
  //       language[lang] = JSON.parse(data.toString());
  //     });
  //   }
  // }
});

app.get('/:lang', (req, res) => {
  let lang = req.params['lang'] || 'en';
  res.send(lang);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});