// We are going  to read Multiple files at same times but Serially....

let fs = require("fs");

console.log("start");


fs.readFile("./f1.txt" , function(err ,data){
    console.log(data + " ");
    fs.readFile("./f2.txt" ,function(error ,data){
        console.log(data + " ");
        fs.readFile("./f3.txt" , function(err ,data){
            console.log(data + " ");
        });
    });
});

// This will print the content of f1 ,f2, f3 in same order always... 