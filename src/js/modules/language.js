const fs = require('fs');
const glob  = require('glob');
let data1 = require('../../../languages/en.json').download_file
let data2 = require('../../../languages/it.json').download_file

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


module.exports = {
    getLabels,
    getAllTranslations
};