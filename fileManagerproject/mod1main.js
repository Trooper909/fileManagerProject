//imports
//inbuilt
const fs = require("fs")
const path = require("path")

//custom modules
const {organise}  = require(".\\mod2OrganiseRoutine");

//actual progrom
src = "C:\\Users\\GOURAB PAIK\\Documents\\ACADEMICS\\projects\\web_d\\practice\\demo";
dirContents = fs.readdirSync(src);
organise(src, dirContents);

console.log("organised")