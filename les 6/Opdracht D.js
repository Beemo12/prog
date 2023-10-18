const readlineSync = require('readline-sync');
let shoppingList = [];

const printList = () => console.log("Jouw lijst bevat:", shoppingList.join(", "));
console.log("Jouw lijst is nog leeg!");

while (true) {
    const action = readlineSync.keyIn('Wat wil je doen? toevoegen (t) of verwijderen (v)? ', { limit: 'tv' });

    if (action === 't') {
        const itemToAdd = readlineSync.question('Wat wil je toevoegen? ');
        shoppingList.push(itemToAdd);
    } else {
        const itemToRemove = readlineSync.question('Wat wil je verwijderen? ');
        const index = shoppingList.indexOf(itemToRemove);

        index !== -1 ? shoppingList.splice(index, 1) : console.log("Item niet gevonden in de lijst.");
    }

    printList();
}
