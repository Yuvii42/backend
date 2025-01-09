const { log } = require('console');
const fs = require('fs');
const os = require("os");

console.log(os.cpus().length);


//Non-Blocking
fs.readFile('test.txt', 'utf-8', (err, result) => {
    //console.log(result);
    
});

//console.log("2");


