var getUserSynch = require('./getUser');

console.log('Stating user 1');
var user1 = getUserSynch('123');
console.log('User1 ', user1);

console.log('Stating user 2');
var user2 = getUserSynch('456');
console.log('User2 ', user2);


var sum = 1+2;
console.log('The SUM is', sum); 


O/P--->
Stating user 1
wait wait wait till get response 
Stating user 2
wait wait wait till get response 
The Sum is 3 