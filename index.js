// These lines make "require" available in ESM:
import { createRequire } from "module";
const require = createRequire(import.meta.url);

//Installed and require the dependencies:
import {franc} from "franc";
const langs = require("langs");

const colors = require("colors");


//Declare variables
const langCode = franc('Alle menslike wesens word vry');
const langugage = langs.where("3", langCode);

console.log(langugage.name);




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
//3. 