const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
let fs =require("fs");
let extensions =require("./extensions");

let testFolderPath ="./testFolder";

let contents = fs.readdirSync(testFolderPath);

console.log(contents);
/* Output :
[
    'abc.avi',  'abc.doc',
    'abc.docx', 'abc.gif',
    'abc.jpeg', 'abc.jpg',
    'abc.mkv',  'abc.mp3',
    'abc.mp4',  'abc.pdf',
    'abc.png',  'abc.txt',
    'abc.wav',  'abc.xml',
    'abc.zip'
  ] 
  */


  // Now We Are Applying Loop on Length ofContent , So it will gives us all the files inside itself...

for(let i =0; i< contents.length; i++){
    let file =contents[i];

    sortFile(file);
}

function sortFile(file){
    console.log(file);
}
/* Output:
abc.avi
abc.doc
abc.docx
abc.gif
abc.jpeg
abc.jpg
abc.mkv
abc.mp3
abc.mp4
abc.pdf
abc.png
abc.txt
abc.wav
abc.xml
abc.zip
*/


