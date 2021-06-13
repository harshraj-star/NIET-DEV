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

/*
FOR PRINTING FILE NAMES:

function sortFile(file){
    console.log(file);
}
Output:
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


FOR PRINTING EXTENSIONS NAME
function sortFile(file){
    let ext =file.split(".")[1];
    console.log(ext);
}
/* Output : We get extensions name only...
avi
doc
docx
gif
jpeg
jpg
mkv
mp3
mp4
pdf
png
txt
wav
xml
zip
*/

// **** STEP 4 **** //
// We have to find the extensions exist in key or not...

function sortFile(file){  // Let file =abc.jpg
    let ext =file.split(".")[1];   // jpg

    let folderName =getFolderName(ext); // getFolder(jpg)
    console.log(ext , folderName);
}

function getFolderName(ext){   // getFolderName(jpg)
    let folderName;  // Uninitialize..
    for(let key in extensions){  // let Image in extensions..
        if( extensions[key].includes(ext)){  // extensions[Image].includes(jpg)

            folderName =key;  // folderName =Image;
            return folderName; // return Image
        }
    }
}

/* OUTPUT :
avi Video
doc Documents
docx Documents
gif Image
jpeg Image
jpg undefined
mkv Video
mp3 Audio
mp4 Video
pdf Documents
png Image
txt Documents
wav Audio
xml Documents
zip compressed
*/




// STEP 5. Now to create foldername if not exist and move the files from testfolder to that newly created folderName . If the folderName is already Exist then just do moving the file work only......

function sortFile(file){  // Let file =abc.jpg
    let ext =file.split(".")[1];   // jpg

    let folderName =getFolderName(ext); // getFolder(jpg)

    let folderPath = testFolderPath + "/" + folderName;

    if(!fs.existsSync(folderPath)){
        // Folder doesn't exist so create a new folder

        fs.mkdirSync(folderPath);
    }

    // Move Files into Newly Created or already created folderName

    // Copying....
    let sourceFilePath =testFolderPath + "/" + file;
    let destFilePath = folderPath + "/" + file;

    fs.copyFileSync(sourceFilePath ,destFilePath);
    /* fs.copyFileSync will copy -
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
From sourceFilePath(i.e testFolder) to destFilePath(i.e Audio , Documents ,Images ,Video ,Compressed Folders...)
*/



    // deleting....

    fs.unlinkSync(sourceFilePath);
    /* fs.unlinkSync will delete -
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
From testFolder Now....
*/ 

}






