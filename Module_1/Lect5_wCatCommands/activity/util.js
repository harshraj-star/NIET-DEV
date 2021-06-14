console.log("Hey i am from wCat");
let fs =require("fs");


let input = process.argv.slice(2);

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

let data ="";
for(let i=0; i<files.length; i++){
    let filesKaData = fs.readFileSync(files[i]);
    data +=i==files.length-1 ? filesKaData : filesKaData +"\r\n";
}




function applySFlags(){
    let dataComp =data.split("\r\n");
    

    let sFlagedData =[];
    let nonEmptyFound =false;
    for(let i=0 ; i< dataComp.length; i++){
        if(dataComp[i]!=''){
            sFlagedData.push(dataComp[i]);
            nonEmptyFound =true;

        }
        else if(dataComp[i] =='' && dataComp[i-1]!='' && nonEmptyFound){
            sFlagedData.push(dataComp[i]);
        }
    }
    

    let sFlagedString =sFlagedData.join("\r\n");
    //console.log(sFlagedString);
    return sFlagedString;

    
}
data =applySFlags();



function applyNFlag(){
    let dataComp = data.split("\r\n");
    let count =1;
    for(let i =0; i<dataComp.length; i++){
        dataComp[i] =count +"." + dataComp[i];
        count++;
    }

    let nFlagedString =dataComp.join("\r\n");
    //console.log(nFlagedData);
    return nFlagedString;

    
}

data =applyNFlag();


// *** -b Flag ***

function applyBFlag(){
    let count =1;
    let dataComp =data.split("\r\n");

    for(let i=0; i<dataComp.length;i++){
        if(dataComp[i]!=''){
            dataComp[i] = `${count}.${dataComp[i]}` // String Interpolation...
            count ++;
        }
    }

    let bFlagedString =dataComp.join("\r\n");
    //console.log(bFlagedData);

    return bFlagedString;


}

data =applyBFlag();












