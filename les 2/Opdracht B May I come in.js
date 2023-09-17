var readlineSync = require('readline-sync');
var age = readlineSync.question('Hallo hoe oud bent u? ');
if (age <= 17) {
    console.log('Hallo als u ' + age + ' bent kan ik u niet naar binnen laten');
}else {console.log('U bent oud genoeg om naar binnen te gaan');
}