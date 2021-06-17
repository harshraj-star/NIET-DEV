const request = require("request");

const cheerio =require("cheerio");

let link = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(link ,cb);

function cb(error ,response ,html){
    evalHTML(html);
}

function evalHTML(html){
    let ch =cheerio.load(html);


    // ******TASK 1 : Winning Team Name.....******

    let winningTeam = ch('.match-header .status-text span').text();
    // console.log(winningTeam);

    let allBowlersTrs =ch('.table.bowler tbody tr');

    // ******TASK 2 : Total Bowlers in a Team.....******

    //console.log(allBowlersTrs.length);
    //console.log(allBowlersTrs);


    



    /*


    // ******TASK 3 : All 11 possible Data's(Wicket , Over , runs ,Economy and so on ....) of Each Bowlers.....******


    for(let i=0; i<allBowlersTrs.length; i++){
        let oneBowlerDetail =allBowlersTrs[i];
        let allTds =ch(oneBowlerDetail).find("td");
        
        console.log(allTds.length);
         Output :

        11
        11
        11
        11
        11
        11
        11
        11
        11
        11
        11
        11
        


        let bowlerName =ch(allTds[0]).text().trim();
        // Its not compulsory to use trim() , We get same output on let bowlerName =ch(allTds[0]).text();

        let wickets =ch(allTds[4]).text().trim();

        let economy =ch(allTds[5]).text().trim();


        /*

       console.log(`Name: ${bowlerName} Wicket: ${wickets} economy: ${economy}`)

        Output
       Name: Trent Boult Wicket: 3 economy: 7.50
       Name: Jasprit Bumrah Wicket: 0 economy: 7.00     
       Name: Jayant Yadav Wicket: 1 economy: 6.25       
       Name: Nathan Coulter-Nile Wicket: 2 economy: 7.25
       Name: Krunal Pandya Wicket: 0 economy: 10.00     
       Name: Kieron Pollard Wicket: 0 economy: 13.00
       Name: Ravichandran Ashwin Wicket: 0 economy: 7.00
       Name: Kagiso Rabada Wicket: 1 economy: 10.66
       Name: Anrich Nortje Wicket: 2 economy: 9.37
       Name: Marcus Stoinis Wicket: 1 economy: 11.50
       Name: Axar Patel Wicket: 0 economy: 4.00
       Name: Praveen Dubey Wicket: 0 economy: 9.66
       */


       // ******TASK 4 :  find highestWicketTakerName , highestWickets ,lowestEconomy from all Bolwers ....



    let highestWicketTakerName;
    let highestWickets;
    let lowestEconomy;

    for(let i=0; i<allBowlersTrs.length; i++){
        let oneBowlerDetail =allBowlersTrs[i];
        let allTds =ch(oneBowlerDetail).find("td");
        


        let bowlerName =ch(allTds[0]).text();
        
        let wickets =ch(allTds[4]).text();

        let economy =ch(allTds[5]).text();

       

       if(i==0){
           highestWicketTakerName = bowlerName;
           highestWickets =wickets;
           lowestEconomy =economy;
       }

       else {
           if(wickets > highestWickets || (wickets == highestWickets && economy<lowestEconomy)){
               highestWicketTakerName =bowlerName;
               highestWickets =wickets;
               lowestEconomy =economy;



           }
       }

       


        
    }
    console.log(`Highest Taker is ${highestWicketTakerName} with ${highestWickets} wickets and with ${lowestEconomy} economy `);
    /* Output:
    Highest Taker is Trent Boult with 3 wickets and with 7.50 economy 
    */


    
    
    
}

// .match-header .status-text span