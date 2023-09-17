var readlineSync = require('readline-sync');
var userName = readlineSync.question('Hallo hoe oud bent u? ');
console.log('Hallo ' + userName + " " + 'aangenaam kennis te maken!');
var hobby = readlineSync.question('wat doe jij in je vrije tijd? ');
console.log('Dat klinkt leuk ' + userName + " " + 'ik hou ook van ' +hobby+ '!');
var vaarwel = readlineSync.question('ik denk dat ik moet gaan ');
console.log( 'doei!' );

test123