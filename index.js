//Installed and require the dependencies:
import {franc} from "franc";
const langs = require("langs");
const colors = require("colors");



console.log(franc('Alle menslike wesens word vry'));




//Challenges:
//problem 1: franc version 6 is written in ES module and not commonJS. This means "required" doesnt work.
//solution 1: Use import from their site AND input <"type": "module"> in the package.json OR RENAME index.js to index.mjs