const fs =require("fs");

const cheerio = require("cheerio");
let htmlKaData = fs.readFileSync("./index.html" ,"utf8");
//console.log(htmlKaData);

let ch = cheerio.load(htmlKaData);
//console.log(ch);

let ptagKaData =ch("p").text();

//console.log(ptagKaData);

/* Output : 
Hey this is a p tag !!Hey this is second p tag !!Hey i am p tag inside ul !! Hi am indirect child of ulHi Iam 2nd child of ul
*/

// To get all the atching p tags inside a tag....
let pTagInsideUl =ch("ul p").text();
/*
console.log(pTagInsideUl);

Output :
Hey i am p tag inside ul !! Hi am indirect child of ulHi Iam 2nd child of ul
*/


// To get direct children
let directPTag =ch("ul>p").text();
//console.log(directPTag);

/*
Output :
Hey i am p tag inside ul !!Hi Iam 2nd child of ul
*/

// Their are two other ways in html to find tags easily:
// 1. class 2. id

let mainPTags =ch(".mainP").text();
/*
console.log(mainPTags);
Output : 
Hey this is a p tag !!Hey this is second p tag !!
*/


let secondaryPTags =ch(".secondaryP").text();
/*
console.log(secondaryPTags);
Output :
Hey i am p tag inside ul !! Hi am indirect child of ulHi Iam 2nd child of ul
*/








