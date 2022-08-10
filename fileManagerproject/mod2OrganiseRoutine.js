//imports
//inbuilt
const { join } = require("path");

//custom
const {sendFile} = require(".\\mod3SendRoutines.js");
const {makeSure} = require(".\\mod4MakeSure.js");

//actual program
/**
 1. stage 1: "organise" folder namae check
 2. stage 2: filecheck and segregation in to specific type and others type
 2. stage 3: sending files to the respective locations
*/
function organise(src, contentList){
pathOrganise = join(src, "organised")   
makeSure(pathOrganise);
sendFile(src, contentList);

}



//exports
module.exports = {organise};
// console.log(module);