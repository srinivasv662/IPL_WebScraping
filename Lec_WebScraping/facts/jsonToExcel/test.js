let jsonObj = [
    {"Runs":"39","Balls":"27","Fours":"3","Sixes":"2"},{"Runs":"45","Balls":"25","Fours":"1","Sixes":"4"},{"Runs":"13","Balls":"19","Fours":"2","Sixes":"0"},{"Runs":"30","Balls":"27","Fours":"3","Sixes":"0"},{"Runs":"42","Balls":"40","Fours":"4","Sixes":"0"},{"Runs":"30","Balls":"30","Fours":"2","Sixes":"0"},{"Runs":"71","Balls":"48","Fours":"6","Sixes":"3"},{"Runs":"38","Balls":"20","Fours":"5","Sixes":"1"},{"Runs":"8","Balls":"9","Fours":"1","Sixes":"0"},{"Runs":"2","Balls":"3","Fours":"0","Sixes":"0"},{"Runs":"41","Balls":"34","Fours":"3","Sixes":"2"}
]

const json2xls = require("json2xls");
const fs = require("fs");

let xls = json2xls(jsonObj);

fs.writeFileSync("data.xlsx", xls, 'binary');