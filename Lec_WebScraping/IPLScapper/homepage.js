const request = require("request");
const cheerio = require("cheerio");
const getAllMatches = require("./allMatches");


// homepage ks html
request("https://www.espncricinfo.com/series/ipl-2020-21-1210595", function(error, response, data){
    processData(data);
});


function processData(html){
    let ch = cheerio.load(html+"");                                   //sometimes html+"" is required to convert to string
    let aTag = ch(".widget-items.cta-link a");
    let AllMatchesLink = "https://www.espncricinfo.com" + aTag.attr("href");
    getAllMatches(AllMatchesLink);
}
