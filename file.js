const { error, log } = require('console');
const fs = require('fs');

/*
//Sync...
fs.writeFileSync('./test.txt', 'Hey Yuvraj, How are you? ')

//Async...
fs.writeFile('./test.txt', "Hello World Async", (error))
*/

/*
//Async
const result = fs.readFileSync("./test.txt", "utf-8")
console.log(result);


//Sync
fs.readFile("./test.txt", "utf-8", (err, result) => {
    if(err){
        console.log("Error", err);
        
    }else{
        console.log(result);
        
    }
})
*/

fs.appendFileSync("./test.txt", `${Date.now()} Hey There \n`);


