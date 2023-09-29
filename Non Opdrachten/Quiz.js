var readlineSync = require('readline-sync');

console.log("Hallo, welkom bij de quiz");
var naam = readlineSync.question('Wie ben jij? ');

console.log("Hallo " + naam + ", dit is een quiz over Yassine.");

var quizQuestions = [
    { question: "Wat is Yassine zijn favoriete eten?", answers: ['kip', 'ei', 'lever', 'gefrituurde cola blikje'], correctAnswer: 'kip' },
    { question: "Wat is Yassine zijn favoriete game?", answers: ['csgo', 'r6s', 'unturned', 'watchdogs'], correctAnswer: 'watchdogs' },
    { question: "Wat is Yassine zijn hobby?", answers: ['gamen', 'trainen', 'programmeren'], correctAnswer: 'trainen' }
];

var score = 0;

quizQuestions.forEach(question => {
    var userAnswer = readlineSync.keyInSelect(question.answers, question.question);
    console.log(userAnswer === -1 ? 'Je hebt de quiz verlaten.' : userAnswer === quizQuestions.indexOf(question) ? 'Correct!' : 'Helaas, het juiste antwoord is: ' + question.correctAnswer);
    if (userAnswer === quizQuestions.indexOf(question)) score++;
});

console.log('Je eindscore is: ' + score + '/' + quizQuestions.length);
