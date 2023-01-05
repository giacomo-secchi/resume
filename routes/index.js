const express = require('express');
const glob  = require('glob');
const fs = require('fs');
var router = express.Router();

let languages = {};

glob.sync( './languages/*.json' ).forEach( ( file ) => {
    const regex = RegExp('languages/(.*).json', 'g');  
    let ISOcode = regex.exec(file)[1];
  
    fs.readFile(file, function(err, data) {
      languages[ISOcode] = JSON.parse( data.toString() );
    });
  
});
  
/* GET users listing. */
router.get('/:lang', function(req, res, next) {
    
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
        privacy: languages[ISOcode].privacy_text,
        nav_button: languages[ISOcode].download_button,
        download_button: languages[ISOcode].download_file,
        sections: languages[ISOcode].sections
      };
      
      res.render(template, content);
});

module.exports = router;
