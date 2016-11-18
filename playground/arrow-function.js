// var square = function(){

// };
var square =(x)=>{
    var result = x * x;
    return result;
};

//if only one line statement inside arrow function 
var square = (x)=> x*x;

//if only one argument for the function then arrow function looks like 
var square = x =>x*x;

console.log(square(9));


var user ={
    name:"vittal",
    //arrow function 
    sayHi:()=>{
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    },
    //regular function 
    sayHiAlt (){
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHiAlt(1,2,3);