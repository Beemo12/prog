const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const targetNumber = Math.floor(Math.random() * 101);

function guessNumber() {
  rl.question("Raad het getal, het is tussen 0 en 100: ", input => {
    const guessedNumber = parseInt(input);

    if (isNaN(guessedNumber)) console.log("Voer een getal in.");
    else if (guessedNumber === targetNumber) console.log("Het getal is juist."), rl.close();
    else console.log(`Het getal is te ${guessedNumber < targetNumber ? 'laag' : 'hoog'}.`), guessNumber();
  });
}

guessNumber();
