let rl = require('readline-sync');

console.log("choose a path:")

console.log("N (north)");
console.log("S (south)");
console.log("W (west)");
console.log("E (east)");

const answer = rl.question("please input the letter of your choice");

if(answer == "n"){
    console.log("Dude climbbs a mountain")
}

else {
    console.log("you died try again")
}