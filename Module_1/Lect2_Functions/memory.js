// So In this code we ae going to see how to debug code line by line and how stack works for functions andf variables....

console.log(multiply);

function multiply(a ,b){
    return a*b;
}

console.log(add);
function add(a ,b){
    return a+b;
}

console.log(x);
var x =multiply(10 ,10);

console.log(y);
var y =add(x ,20);

console.log(x);
console.log(y);