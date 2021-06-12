
//callMe() runs easily...
callMe();

function callMe(name){
    console.log("harsh");
    return 10;
}


// syaHi() will give error like "Cannot access 'sayHi' before initialization "
sayHi();
let sayHi = function(){
    console.log("Harsh");
}

