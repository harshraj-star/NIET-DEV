let fs =require("fs");

let {applySFlag ,applyNFlag ,applyBFlag } =require("./util");

let input =process.argv.slice(2);

let files =[];
let flags =[];
for(let i=0; i<input.length ;i++){
    if(input[i].startsWith("-")){
        if(!flags.includes(input[i])) flags.push(input[i]);
    }

    else {
        if(!files.includes(input[i])) files.push(input[i]);
    }
}

//console.log(files);
//console.log(flags);

let data ="";
for(let i=0; i<files.length; i++){
    let filesKaData = fs.readFileSync(files[i]);
    data += i ==files.length-1 ? filesKaData : filesKaData +"\r\n";
}

if(flags.includes("-s")){
    // data sflagged !!
    data =applySFlag(data);
}

if(flags.includes("-n") && flags.includes("-b")){
    if(flags.indexOf("-n") < flags.indexOf("-b")){
        data = applyNFlag(data);
    }

    else {
        data = applyBFlag(data);
    }
}

else if(flags.includes("-n")){
    data =applyNFlag(data);
}

else if(flags.includes("-b")){
    data =applyBFlag(data);
}

console.log(data);


