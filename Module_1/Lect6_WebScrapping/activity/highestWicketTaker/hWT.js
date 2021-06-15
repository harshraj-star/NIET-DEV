const request = require("request");

const cheerio =require("cheerio");

let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(link ,cb);

function cb(error ,response ,html){
    evalHTML(html);
}

function evalHTML(html){
    let ch =cheerio.load(html);
    let winningTeam = ch('.match-header .status-text span').text();
    console.log(winningTeam);
}

// .match-header .status-text span