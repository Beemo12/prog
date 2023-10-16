const readlineSync = require('readline-sync');

function LeeftijdVerificatie() {
    const leeftijd = parseInt(readlineSync.question('hoe oud ben je? '));
    if (leeftijd >= 18) {
        console.log('je bent oud genoeg om naar binnen te gaan.');
        const hasId = readlineSync.keyInYNStrict('laat me je ID zien');
        if (hasId) {
            console.log('je mag naar binnen.');
        } else {
            console.log('Sorry, je mag niet naar binnen.');
        }
    } else {
        console.log('Sorry, je bent niet oud genoeg om naar binnen te gaan.');
    }
}
LeeftijdVerificatie();