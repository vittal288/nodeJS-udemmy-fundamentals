//Object to string 
// var obj={
//     name:'Vittal'
// };
// console.log(obj);
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);


//string to object
// var personString ='{"name":"Vittal","age":28}';
// var person = JSON.parse(personString);

// console.log(typeof person);
// console.log(person);


const fs = require('fs');

var originalNote ={
    title:"some title",
    body:"some body"
};

var orginalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',orginalNoteString);

var noteString = fs.readFileSync('notes.json');
console.log(noteString);
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);