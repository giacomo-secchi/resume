const fs = require('fs');
const glob  = require('glob');
 

function getTranslationFilesPath() {
    // return glob.sync( './languages/*.json' )
    // glob.sync( './languages/*.json' ).reduce( ( element, max ) => {
        

    //     // const regex = RegExp('languages/(.*).json', 'g');  
    //     // return regex.exec(file);
 
    // });  
   
   
}

function getAllTranslations() {
    let languages = [];
    
    glob.sync( './languages/*.json' ).forEach(element => {
        languages.push(getLabels(element));
    });

    return languages;
}

function getLabels(file) {
       //TODO: if (files.includes(lang)) 
} 

function getAllLanguagesIsocode() {

    glob("./languages/*.json", function (er, files) {
        // files is an array of filenames.
        // If the `nonull` option is set, and nothing
        // was found, then files is ["**/*.js"]
        // er is an error object or null.
        const regex = RegExp('languages/(.*).json', 'g');
        console.log(regex.exec(files))
    });
}


module.exports = {
    getLabels,
    getAllTranslations,
    getAllLanguagesIsocode
};