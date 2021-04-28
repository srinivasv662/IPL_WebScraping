const cheerio = require("cheerio");
const request = require("request");
const getMatchDetails = require("./match");


function getAllMatches(link){
    request(link, function(error, response, data){
        processData(data);
    });
}

function processData(html){
    // get link of all the matches
    let ch = cheerio.load(html+"");                                 //sometimes html+"" is required to convert to string
    let allATags = ch('a[data-hover="Scorecard"]');
    // { {}, {}, {}, {}, {}, {}, {}} -> traversing over all the small objects 
    for(let i = 0; i < allATags.length; i++){
        let mactchLink = "https://www.espncricinfo.com" + ch(allATags[i]).attr("href");
        // console.log(mactchLink);
        getMatchDetails(mactchLink);
    }
}

// nodejs feature
module.exports = getAllMatches;