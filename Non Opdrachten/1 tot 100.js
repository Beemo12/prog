const readline = require('readline-sync');

let answer = readline.question("Wat is de kleur van groen gras? ");

if (answer=="groen") {
    console.log("correct")
}
else {
    console.log("fout")
}