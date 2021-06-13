let fs= require("fs");
console.log("start");
fs.readFile("./f1.txt" , cb);
function cb(error ,data){
    console.log(error);
    console.log(data);

    console.log(data + " ");
}
console.log("end");
// So Our Code Just Print
// start
//  end
//  only.....


while(true){  // It will gives us infinte loops...

}
