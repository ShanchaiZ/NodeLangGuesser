// These lines make "require" available in ESM:
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//Installed and require the dependencies:
import { franc } from "franc";
const langs = require("langs");
const colors = require("colors");

//Language detection code:
const input = process.argv[2]; //node user input 
const langCode = franc(input); //franc = method to detect the language of text

if (langCode === "und") {
    console.log("Undetected Language. Please try again with more sample text!".bgMagenta);
} else {
    const langugage = langs.where("3", langCode); //lang = language library that represents languages in 3 language codes.
    console.log(`Our best guess is: ${langugage.name}`.brightBlue);
}






//Challenges:
//problem 1: franc version 6 is written in ES module and not commonJS. This means "required" doesnt work.
//solution 1: Use import from their site AND input <"type": "module"> in the package.json OR RENAME index.js to index.mjs

//problem 2: js does not allow  both import and require syntax in the same file. This occured due to "franc" using "import" then "langs" using "required".
//solution 2: google --> how to use import and required in the same file javascript.
//and found this code:
//----------------------------------------
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
//----------------------------------------
// PsuedoCode steps:
// 1. Installed dependencies
// 2. Declared variables where franc is used to Detect the language of text and langs is a library that has all the language coded in ISO 639-1/2/3 language codes.
//3. Use user input for language to be detected by code. In node process.argv[0] is the executable path, process.argv[1] is the path to file and process.argv[2] is other arguments. we want to use process.argv[2] as user inputs for language.
//4. If language detection fails => console.log "try again with more sample text!"
//5. BONUS: added npm colors for aesthetics. Installed and add at the end of strings to make color take effect!