let fs =require("fs");

console.log("start");

// let f1KaData =fs.readFileSync("./f1.txt"); // It will return Biffer<> values 
let f1KaData =fs.readFileSync("./f1.txt" ,"utf8");
console.log(f1KaData);
console.log("end");