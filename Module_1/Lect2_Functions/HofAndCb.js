// HOF : High order functions...
//CB : CallBack Functions...

function getFirstName(fullName){  // getFirstName is a CallBack Function...
    fullName =fullName.split(" ");
    return fullName[0];

}

function getLastName(fullName){  // getLastName is a CallBack Function....
    fullName =fullName.split(" ");
    return fullName[1];

}

function callMe(fullName , fun){  // callMe is a High order Function because two functions as arugument are passed to it ...
    let name = fun(fullName);
    console.log(name);
}

callMe("steve rogers",getFirstName);
callMe("steve rogers" , getLastName);


callMe("Tony Stark" , getFirstName);
callMe("Tony Stark" , getLastName);