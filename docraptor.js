// const fs = require( 'fs' );
// var content = "<html><body>TEST!</body></html>";

// config = {
//   method: 'POST',
// //  encoding: null, //IMPORTANT! This produces a binary body response instead of text
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     user_credentials: "YOUR_API_KEY_HERE",
//     mode: 'cors',
//     cache: 'default',
//     doc: {
//       document_content: content,
//       type: "pdf",
//       test: true,  // test documents are free but watermarked
//       prince_options: {
//         media:   "screen",          // use screen styles instead of print styles
//         // baseurl: "http://hello.com" // URL to use for generating absolute URLs for assets from relative URLs
//       }
//     }
//   })
// };

// fetch('https://api.docraptor.com/docs', config)
// .then(response => response.arrayBuffer())
//   .then((data) => {
//     fs.writeFile('doc_raptor_sample.pdf', data, "binary", function(writeErr) {
//       console.log('Saved!');
//     });
//   })
//   .catch(function (err) {
//     console.log("Unable to fetch -", err);
//   });
 
var request = require('request');
var fs = require('fs');
var content = "<html><body>TEST!</body></html>";

config = {
  url: 'https://api.docraptor.com/docs',
  encoding: null, //IMPORTANT! This produces a binary body response instead of text
  headers: {
    'Content-Type': 'application/json'
  },
  json: {
    user_credentials: "YOUR_API_KEY_HERE",
    doc: {
      // document_content: content,
      document_url: 'https://personal-website2.herokuapp.com/en',
      type: "pdf",
      test: true,
      prince_options: {
        javascript: true,
        baseurl: "https://personal-website2.herokuapp.com" // URL to use for generating absolute URLs for assets from relative URLs
      }
    }
  }
};

request.post(config, function(err, response, body) {
  fs.writeFile('doc_raptor_sample.pdf', body, "binary", function(writeErr) {
    console.log('Saved!');
  });
});
 
//     $doc->setDocumentContent(file_get_contents("index.html"));
//     # $doc->setDocumentUrl("https://docraptor.com/examples/invoice.html");
//     # $doc->setJavascript(true);
//     $prince_options = new DocRaptor\PrinceOptions();
//     $doc->setPrinceOptions($prince_options);
//     // $prince_options->setMedia("print"); # @media 'screen' or 'print' CSS
//     $prince_options->setBaseurl("https://resume-giacomo-secchi.herokuapp.com/"); # the base URL for any relative URLs

//     $response = $docraptor->createDoc($doc);

//     # createDoc() returns a binary string
//     file_put_contents("Giacomo_Secchi_CV.pdf", $response);
//     echo "Successfully created Giacomo_Secchi_CV.pdf!";
// } catch (DocRaptor\ApiException $error) {
//     echo $error . "\n";
//     echo $error->getMessage() . "\n";
//     echo $error->getCode() . "\n";
//     echo $error->getResponseBody() . "\n";
// }