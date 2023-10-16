const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
let score = 0;

function klikOpKoekje() {
  rl.question('wil je klikken? (ja/nee): ', (antwoord) => (antwoord.toLowerCase() === 'ja' || antwoord === '') ? 
  (score++, console.clear(), 
  console.log(`[Cookie Clicker] score: ${score}`), klikOpKoekje()) : 
  (console.log(`[Cookie Clicker] Game Over, je score is ${score} punten`), rl.close()));
}

console.log('[Cookie Clicker] Welkom bij Cookie Clicker!');
klikOpKoekje();
