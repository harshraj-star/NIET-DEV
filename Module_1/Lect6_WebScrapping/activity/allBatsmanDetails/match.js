let matchLink ="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

const request = require("request");
const cheerio =require("cheerio");

const fs =require("fs");

request(matchLink ,function(error , response ,html) {
    processHTML(html);
});

function processHTML(html){
    let ch =cheerio.load(html);
    let bothInnings =ch('.Collapsible');
    fs.writeFileSync("match.html" , bothInnings + "");
    // now this fs.writeFileSync will create a match.html file inside the allBatsmanDetails folder...
}


