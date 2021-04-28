// npm install request
// async function callback pass hoga

const fs = require("fs");
const cheerio = require("cheerio");
const request = require("request");

// async
// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595", getMeData);

// function getMeData(error, response, body){
//     fs.writeFileSync("./homepage.html", body);
// }

let homepageKaData = fs.readFileSync("./homepage.html");
// // console.log(homepageKaData.toString());

let ch = cheerio.load(homepageKaData);

let aTag = ch(".widget-items.cta-link a");
// console.log(aTag);
let AllMatchesLink = "https://www.espncricinfo.com" + aTag["0"].attribs.href;
console.log(AllMatchesLink);

