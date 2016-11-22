var getUser = require('./getUser');

getUser('123',function(user1){
    console.log('User 1' , user1)
});

getUser('456',function(user2){
    console.log('User 2' , user2)
});

var sum = 1+2;
console.log('Sum is ' , sum);

O/P--->
Stating user 1
Stating user 2
The Sum is 3
then display the user1 and user2 info 
User1 info 
user2 info 