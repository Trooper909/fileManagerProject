//imports
//inbuilt
const { existsSync, mkdirSync, copyFileSync } = require("fs")

//custom


//actual program
function makeSure(destPath){
    existence = existsSync(destPath);

    if (existence == false){
        mkdirSync(destPath);
    }
}

//exports 
module.exports = {makeSure}