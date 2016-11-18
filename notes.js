//console.log('starting notes.js');
const fs = require('fs'),
      filePath ="notes-data.json";

var fetchNotes = ()=>{
    try{
      //the line of code which may or may not through error 
      var noteString = fs.readFileSync(filePath);        
      return JSON.parse(noteString);
    }catch(e){
       //invoke catch block, if there is an error in the try block
       //console.log('File not found');
       return [];
    }
};

var saveNotes =(notes)=>{    
     fs.writeFileSync(filePath,JSON.stringify(notes));
};


var addNote = (title,body)=>{       
    var notes = fetchNotes();
    var note={
            title,
            body
    };
          
    /*
     *using ES6 feature  
     */
    // var duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // });
    var duplicateNotes = notes.filter((note)=>note.title === title);
    //console.log('duplicateNotes ARRAY', duplicateNotes);
    if(duplicateNotes.length===0){
        notes.push(note);       
        saveNotes(notes);
        return notes;
    }else{
        //
    }    
};





var getAll =()=>{
    return fetchNotes();
};


//read matching note 
var getNote =(title)=>{   
    debugger;    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title === title); 
    return filteredNotes[0];
};

var removeNote =(title,body)=>{    
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note)=>note.title !== title);    
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;

};

var logNote = function(message){
    console.log(message);
};

module.exports={
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};