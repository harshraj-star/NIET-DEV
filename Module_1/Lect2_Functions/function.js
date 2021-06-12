
// *1
function callMe(){
    console.log("Call Me function is called");
    
}

callMe();

// *2

console.log(callMe);
console.log(callMe());

// *3
function callMe(){
    console.log("Call Me function is called");
    return 10;
    
}

console.log(callMe());

// *4
let rVal = callMe();
console.log(rVal);

function callMe( name){
    console.log("harsh");
    console.log(name);
}

callMe("Raj");


// *5
function callMe( name){
    console.log("My name is" + name );
}

callMe("Raj");


// *6 High Order Functions And CallBack functions

let sayHi =function(){
    console.log("Functio says hi!!");
}

sayHi();