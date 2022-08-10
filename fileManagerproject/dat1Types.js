const types = {
    media: ["mp4", "mkv"], //2
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"], //10
    documents: ['txt', 'docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'ps', 'tex'], //5
    app: ['exe', 'dmg', 'pkg', "deb"], //4
    dev: ['cpp', 'c++', 'js', 'py', 'html', 'css'], //6
    audio : ['mp3', 'wav', 'flac'], //3
    pictures : ['jpg', 'jpeg', 'png'] //3
}
//n(supported filetypes) =  33  
module.exports = {types}

//exports
//console.log(module);