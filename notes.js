console.log('Starting notes.js');

//console.log(module);

//module.exports.age = 25;

//module.exports.addNote = function () {

//}

//module.exports.addNote = () => {
//  console.log('addNote');
//  return 'New note';
//};

//module.exports.add = function (a, b) {
//  return a+b;
//};

const fs = require('fs');

var logNote = (note) => {
  //Use debugger on this line to inspect note.
  //Use read command with --title.
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

var fetchNotes = () => {
  //The below code was present in addNote and was then later made as a separate subroutine.
  try {
    var notesString = fs.readFileSync('notes-data.json');
    //notes = JSON.parse(notesString);
    return JSON.parse(notesString);
  } catch (e) {
    //No need to have anything here as notes is an empty array already.
    //Even if file does not exit, we won't face any error.
    return [];
  }

};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  console.log('Adding note', title, body);

//  var notes = [];
var notes = fetchNotes();
  var note = {
    title: title,
    body //since key and value are the same. Works in ES6
  };

// var duplicateNotes = notes.filter((note) => { //filter is an array funtion with a callback
//this function gets called once for every item in the array
//return either true or false. if you return true, it is going to be stored in the array.
// return note.title === title;
//});

  var duplicateNotes = notes.filter((note) => note.title === title);
  // if you have only a return statement, you can write is like above.

  if (duplicateNotes.length === 0) {
    notes.push(note);
  //    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes.');
  return fetchNotes();

};

var getNote = (title) => {
  console.log('Getting the note: ', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  console.log('Removing note: ', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  //addNote
  addNote: addNote, //If key and value are same, you can just have addNote
  getAll,
  getNote,
  removeNote,
  logNote
};
