const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


//console.log('starting app.js');


// var filteredArray = _.uniq(['vittal','1',1,3,4,3,'vittal']);

// console.log('filteredArray Array ' , filteredArray);

// console.log('The SUM is' , notes.addNotes(3,8));


// console.log('PROCESS ARGV' , process.argv);
//console.log('YARGS' ,yargs.argv);
var titleOption ={
             describe:"Title of a note",
             demand:true,
             alias:'t'
},
bodyOption = {
             describe:"Body of a note",
             demand:true,
             alias:'b'
};
var argv = yargs
     .command('add','Add a new note',{
         title:titleOption,
         body:bodyOption
     })
     .command('list','Listing all notes')
     .command('read','Reading a Note',{
         title:titleOption,
     })
     .command('remove','Removing a note',{
         title:titleOption,
     })
     .help()
     .argv;
var command = argv._[0];

if(command === 'add'){
    var note = notes.addNote(argv.title,argv.body);      
   /* if(note=== undefined){
        console.log('Note with same title is already present');
    }else{
        console.log(note[note.length-1].title +" note is saved successfully");
    }*/

    if(note){//if it is undefined then this is false in if statement 
        //ES6 for template string syntax
        console.log(`${note[note.length-1].title} note is created`);
    }else{
         console.log('Note with same title is already present');
    }
}else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach((note,i)=>notes.logNote(`${i+1}.${note.title} --- ${note.body}`));

}else if(command === 'read'){
    var note = notes.getNote(argv.title);    
    var message = note ? `${note.title} is Found` :'Not Found, please try next note';
    console.log(message);
}else if(command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title,argv.body); 
    console.log(noteRemoved);
    var message = noteRemoved ? `${argv.title} was removed !`:`${argv.title} not found, please try other note !`;
    console.log(message);
         
}else{
    console.log('command is not found');
}