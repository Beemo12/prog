const readlineSync = require('readline-sync');

let playerName = "Player";
let health = 21;

function generateRandomDamage(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {
  console.log("[game] Je komt een Slijm tegen");
  console.log(`[game] Je hebt ${health} HP.`);

  while (health > 0) {
    const userInput = readlineSync.question("[game] Wat ga je doen? (Vechten of vluchten?) ").toLowerCase();

    if (userInput === "vechten") {
      let playerDamage = generateRandomDamage(3, 7);
      let monsterDamage = generateRandomDamage(1, 4);

      console.log(`[game] ${playerName} zwaait zijn zwaard en doet ${playerDamage} schade.`);
      console.log(`[game] Slijm valt aan en doet ${monsterDamage} schade.`);

      health -= monsterDamage;
      if (health <= 0) {
        console.log("[game] Je hebt verloren. Game Over.");
      }
    } else if (userInput === "vluchten") {
      console.log("[game] " + playerName + " rent weg van de Slijm.");
      break;
    } else {
      console.log("[game] Ongeldige input. Probeer opnieuw.");
    }
  }
}

game();
