#!/usr/bin/env node
//
// INSTALLATION
//
// The Axios package is the only requirement for this example:
// $ npm install axios

const axios = require('axios');
const fs = require('fs');
const i18next = require('./i18n')();
const pug = require('pug');
let content = "<html><body>TEST!</body></html>";

let config = {
  url: "https://api.docraptor.com/docs",
  method: "post",
  responseType: "arraybuffer", //IMPORTANT! Required to fetch the binary PDF
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    user_credentials: "KPXpLWUsmMJCD2iUQ-Mu", // this key works in test mode!
    doc: {
      test: true, // test documents are free but watermarked
      document_type: "pdf",
      document_content: content,
      javascript: true,
      prince_options: {
      //   media: "print", // @media 'screen' or 'print' CSS
        baseurl: "https://personal-website2.herokuapp.com", // the base URL for any relative URLs
      }
    }
  }
};



i18next
  .then((i18next) => {
    let sections = i18next.t('sections', { returnObjects: true });
    const html = pug.renderFile('views/index.pug', { sections, t: i18next.t  });

    return { html, i18next };
  })
  .then(({ html, i18next }) => {
    config.data.doc.document_content = html;
    
    return i18next;
  })
  .then((i18n) => i18n.services.resourceStore.data)
  .then((response) => {

    Object.keys(response).forEach(lang => {
 
      let path = `dist/${response[lang].translation.download_file}`;

      axios(config)
        .then(function(response) {
   
          fs.writeFile(path, response.data, "binary", function(writeErr) {
            if (writeErr) throw writeErr;
            console.log(`Saved ${path}!"`);
          });

        })
        .catch(function(error) {
          // DocRaptor error messages are contained in the response body
          // Since the response is binary encoded, let's decode
          var decoder = new TextDecoder("utf-8");
          console.log(decoder.decode(error.response.data));
        });
    })
  })
  // .then(process.exit())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });