// We are going  to read Multiple files at same times but parallely....

let fs =require("fs");
fs.readFile("./f1.txt" , function(err ,data){
    console.log(data + " ");
});

fs.readFile("./f2.txt" ,function(err ,data){
    console.log(data +" ");

});

fs.readFile("./f3.txt" , function(err ,data){
    console.log(data +"  ");
});

// I hope this will print content from files f1 , f2 ,f3...
// AndThose file exexute fast which have less size...
//  So order is not fixed...


