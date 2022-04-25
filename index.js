// const greet = require("./second.js");


// greet.starting();
// greet.success('abc');

// //console.log("Hello World!");

// var fs = require('fs');
// fs.readFile('./File/file1.txt', function(err, data){
//     console.log(data);
// });
// console.log("readFile called");

const file = require("./Read/ReadFile.js");

var fs = require('fs');

file.read("./File");

// let docs = fs.readdirSync('./File');
// console.log(docs);
// console.log('Hello');

