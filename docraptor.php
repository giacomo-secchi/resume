<?php


require_once __DIR__ . "/vendor/autoload.php";


$docraptor = new DocRaptor\DocApi();
$docraptor->getConfig()->setUsername("YOUR_API_KEY_HERE");

try {
    $doc = new DocRaptor\Doc();
    $doc->setTest(true); # test documents are free but watermarked
    $doc->setDocumentType("pdf");
    $doc->setDocumentContent(file_get_contents("index.html"));
    # $doc->setDocumentUrl("https://docraptor.com/examples/invoice.html");
    # $doc->setJavascript(true);
    $prince_options = new DocRaptor\PrinceOptions();
    $doc->setPrinceOptions($prince_options);
    // $prince_options->setMedia("print"); # @media 'screen' or 'print' CSS
    $prince_options->setBaseurl("https://resume-giacomo-secchi.herokuapp.com/"); # the base URL for any relative URLs

    $response = $docraptor->createDoc($doc);

    # createDoc() returns a binary string
    file_put_contents("Giacomo_Secchi_CV.pdf", $response);
    echo "Successfully created Giacomo_Secchi_CV.pdf!";
} catch (DocRaptor\ApiException $error) {
    echo $error . "\n";
    echo $error->getMessage() . "\n";
    echo $error->getCode() . "\n";
    echo $error->getResponseBody() . "\n";
}