let a =10;

module.exports ={a};
// o/p : { a: 10 }


module.exports.a =a;
module.exports.name="hello";
// Output : { a: 10, name: 'hello' }


module.exports =a;
// Output: 10


module.exports ={
    name : "Harsh" ,
    character : "is a good boy"
}
// Output : { name: 'Harsh', character: 'is a good boy' }


module.exports =function(){
    console.log("I  came from b.js file...")
}
// Output : I  came from b.js file...




