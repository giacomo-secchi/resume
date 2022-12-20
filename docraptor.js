//
// INSTALLATION
//
// The Axios package is the only requirement for this example:
// $ npm install axios

const axios = require("axios");
const fs = require("fs");

config = {
  url: "https://api.docraptor.com/docs",
  method: "post",
  responseType: "arraybuffer", //IMPORTANT! Required to fetch the binary PDF
  headers: {
    "Content-Type": "application/json"
  },
  data: {
    user_credentials: "YOUR_API_KEY_HERE", // this key works in test mode!
    doc: {
      test: true, // test documents are free but watermarked
      document_type: "pdf",
      // document_content: "<h1>Hello, World!</h1>",
      document_url: "https://docraptor.com/examples/ebook.html"
      // javascript: true,
      // prince_options: {
      //   media: "print", // @media 'screen' or 'print' CSS
      //   baseurl: "https://yoursite.com", // the base URL for any relative URLs
      //   }
    }
  }
};

axios(config)
  .then(function(response) {
    let files = ["dist/example-ebook12.pdf","dist/example-ebook112.pdf"];

    files.forEach(file => {
      fs.writeFile(file, response.data, "binary", function(writeErr) {
        if (writeErr) throw writeErr;
        console.log(`Saved ${file}!"`);
      });      
    });
  })
  .catch(function(error) {
    // DocRaptor error messages are contained in the response body
    // Since the response is binary encoded, let's decode
    var decoder = new TextDecoder("utf-8");
    console.log(decoder.decode(error.response.data));
  });