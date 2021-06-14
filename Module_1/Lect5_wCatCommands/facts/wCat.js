console.log("Hey i am from wCat");
const { FORMERR } = require("dns");
let fs =require("fs");
/*
console.log(process); // this is use to find all the commands inside process object inside argv in the form of arrays...

let input = process.argv;
console.log(input);
/* Output : 
[
  'C:\\Program Files\\nodejs\\node.exe',
  'E:\\GITHUB WORKS\\NIET_DEV\\Module_1\\Lect5_wCatCommands\\facts\\wCat.js',
  '-s',
  '-n',
  '-b',
  'f1.txt',
  'f2.txt'
] */

// If we want only from index 2 inside our argv[] then we have to use either slice() or splice() functions...

let input = process.argv.slice(2);
/* 
console.log("***Our Total inputs inside the array is like***")
console.log(input);

Output :
[ '-s', '-n', '-b', 'f1.txt', 'f2.txt' ]
*/

// Now Our task is to seperate inputs into two form of arrays: 1. Files[] 2. Flags[]
let files =[];
let flags =[];
for(let i=0; i<input.length ;i++){
    if(input[i].startsWith("-")){
        flags.push(input[i]);
    }

    else {
        files.push(input[i]);
    }
}
/*
console.log("***Our Flags inputs inside the array is like***")
console.log(flags);
console.log("***Our Files inputs inside the array is like***")
console.log(files);

 Output:
***Our Total inputs inside the array is like***
[ '-s', '-n', '-b', 'f1.txt', 'f2.txt' ]
***Our Flags inputs inside the array is like***
[ '-s', '-n', '-b' ]
***Our Files inputs inside the array is like***
[ 'f1.txt', 'f2.txt' ]
*/

// Now We Have to read data of files f1.txt f2.txt ... and print their data also ...
let data ="";
for(let i=0; i<files.length; i++){
    let filesKaData = fs.readFileSync(files[i]);
    data +=i==files.length-1 ? filesKaData : filesKaData +"\r\n";
}

//console.log(data);
/* Output :
Command Input : E:\GITHUB WORKS\NIET_DEV\Module_1\Lect5_wCatCommands\facts> node wCat.js f1.txt f2.txt
Hey I am F1


Bye I am F1
Hey I am F2


Bye I am F2
*/

function applySFlags(){
    let dataComp =data.split("\r\n");
    /*
    console.log(dataComp);

    Output :
    [ 'Hey I am F1', '', '', 'Bye I am F1' ]
    */

// Now We Have to remove Empty Spaces '' from the above array contents and just a single space between line 1(Hey I am F1) and line 2{Bye I am F1) ....

    let sFlagedData =[];
    let emptyPushed =false;
    for(let i=0 ; i< dataComp.length; i++){
        if(dataComp[i] !=''){
            sFlagedData.push(dataComp[i]);
        }

        else if(dataComp[i]== '' && !emptyPushed) {
            sFlagedData.push(dataComp[i]);
            emptyPushed=true;

        }
        
    }
    /* 
    console.log(sFlagedData);
    
    Output :
    [ 'Hey I am F1', '', 'Bye I am F1' ]
    */

    let sFlagedString =sFlagedData.join("\r\n");
    console.log(sFlagedString);
    
}
applySFlags();









