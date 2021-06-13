let fs= require("fs");
console.log("start");
fs.readFile("./f1.txt" , cb);
function cb(error ,data){
    console.log(error);
    console.log(data);

    console.log(data + " ");
}
console.log("end");

// On stack async function does not called......