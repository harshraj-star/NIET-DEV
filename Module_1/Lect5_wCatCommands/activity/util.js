function applySFlag(data){
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



function applyNFlag(data){
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



// *** -b Flag ***

function applyBFlag(data){
    let count =1;
    let dataComp =data.split("\r\n");

    for(let i=0; i<dataComp.length;i++){
        if(dataComp[i]!=''){
            dataComp[i] = `${count}.${dataComp[i]}`; // String Interpolation...
            count ++;
        }
    }

    let bFlagedString =dataComp.join("\r\n");
    //console.log(bFlagedData);

    return bFlagedString;


}


module.exports.applySFlag=applySFlag;
module.exports.applyNFlag =applyNFlag;
module.exports.applyBFlag =applyBFlag;












