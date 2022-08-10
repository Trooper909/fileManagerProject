// imports 
//inbuilt
const { copyFileSync } = require("fs");
const { join, extname } = require("path");

//custom 
// Methods 
const {makeSure} = require(".\\mod4MakeSure.js")

// data
const {types} = require('.\\dat1Types');
extTypes = types
// console.log("---------------------------------------------------------");
// console.log("extTypes: ", extTypes);




//actual program
/*
        1. for loop 1 - contentlist -> extname
        2. bifucation - folder / file operation -> switch case

        3. for loop 2 - filetypes checking 
        if match 
            flag -> true 
            sendSpecific()
        flag?false
        sendToOthers()
        */

function sendFile(src, contentList) {
    

    for (let fileName in contentList) {
        let flag = false;

        //STAGE I: extension name ectraction

        ext = extname(contentList[fileName]);
        ext = ext.slice(1);


        //STAGE II: Bifurcation File / Folder

        switch (ext) {
            case '': ;
                break;
            default:
                //STAGE III: file sending operation
                for (let macroTypes in extTypes) {
                    for (let subTypes in macroTypeWatch = extTypes[macroTypes]) {
                        subTypeWatch = macroTypeWatch[subTypes];
                        if (ext == subTypeWatch) {
                            flag = true;
                            sendToSpecific(src, macroTypes, contentList[fileName]);
                            break;
                        }
                    }

                    if(flag == true){
                        break;
                    }
                }

                if (flag == false) {
                    sendToOthers(src, contentList[fileName]);
                }
        }
    }
}

// //send fuction 
// 1. make sure the existence of the folder whether specific or others 
// 2. copy the files then


function sendToSpecific(src, ext, fileName) {  
    let fileSrcPath = join(src, fileName);
    let fileDestPath = join(src, "organised", ext, fileName);
    let dirdestPath = join(src, "organised", ext);

    makeSure(dirdestPath);
    copyFileSync(fileSrcPath, fileDestPath);

}

function sendToOthers(src, fileName) {
    let fileSrcPath = join(src, fileName);
    let fileDestPath = join(src, "organised", "others", fileName);
    let dirDestPath = join(src, "organised", "others");

    makeSure(dirDestPath);
    copyFileSync(fileSrcPath, fileDestPath);
}


//exports
module.exports = {sendFile};
