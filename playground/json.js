//var obj = {
//  name: 'Vaithya'
//};

//Send this json object between servers and save it in a text file and read it later.
//To do this, we need to use a javascript method.

//var stringObj = JSON.stringify(obj); //JSON is a string.
//console.log(typeof stringObj);
//console.log(stringObj);
//JSON -- Key values are wrapped in double quotes.

//var personString = '{"name": "Vaithya", "age": 23}';
//Lets say we get this JSON from a server or text file.

//var person = JSON.parse(personString);
//console.log(typeof person);
//console.log(person);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
