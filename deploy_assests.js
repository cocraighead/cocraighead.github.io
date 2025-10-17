
/**
 * When deploying to the live site assets in cocraighead.github.io folder will be used
 * When working in local the assets in src will be used.
 * To keep folders in sync run this code
 */

var fs = require('fs')

var destFolder = './assets/'
var srcFolder = './site/src/assets/'


fs.readdir(srcFolder, function (err, files) {
  files.forEach( function (file) {
    console.log(file)
    if(file.indexOf('.png') >= 0){
        fs.copyFile(srcFolder + file, destFolder + file, function (r) {
            console.log('file copied: ' + file)
        });
    }
  });
});