const readlineSync = require('readline-sync');

function berekenFactoriaal(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * berekenFactoriaal(n - 1);
  }
}

const getal = readlineSync.questionInt('Voer een getal in voor de factoriaal: ');
const factoriaalVanGetal = berekenFactoriaal(getal);
console.log(`De factoriaal van ${getal} is: ${factoriaalVanGetal}`);