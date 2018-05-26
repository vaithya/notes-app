console.log('Starting app!');
//Explore inbuilt libraries in node.
const fs = require('fs');
const _ = require('lodash'); //Exactly as it is in package.json
//const os = require('os');
const yargs = require('yargs');

// Our files
const notes = require('./notes.js');

const titleOption = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
}

const bodyOption = {
  describe: 'Body of note',
  demand: true,
  alias: 'b'
}

//const argv = yargs.argv; //Where yargs stores its version of arguments
const argv = yargs
  .command('add', 'Add a new note', {
//    title: {
//    describe: 'Title of note',
//      demand: true,
//      alias: 't'
//    },
//    body: {
//      describe: 'Body of note',
//      demand: true,
//      alias: 'b'
//    }
    title: titleOption,
    body: bodyOption
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: {
      describe: 'Title of note',
      demand: true,
      alias: 't'
    },
  })
  .command('remove', 'Remove a note', {
    title: titleOption,
  })
  .help()
  .argv;
//var user = os.userInfo();
//console.log(user);

//fs.appendFile('greetings.txt',`Hello ${user.username}!. You are ${notes.age}.`, function (err) {
//  if (err) {//Callback
//    console.log('Unable to write to file.');
//  }
//});

//Templating - Backticks.
//fs.appendFile('greetings.txt',`Hello ${user.username}!`, function (err) {
//  if (err) {
//    console.log('Unable to write to file.');
//  }
//});

//var res = notes.addNote();
//console.log(res);

//var sum = notes.add(3,5);
//console.log(sum);

//console.log(_.isString(true));
//console.log(_.isString('Vaithya'));

//var array = _.uniq(['Mike',1,'ABC',1,2,3,4]);
//console.log(array);

//console.log(process.argv); //arguments vector -  node app.js list
var command = process.argv[2];
console.log(argv);
var command2 = argv._[0];

console.log('Command: ',command);

if (command === 'add') {
  console.log('Adding new note.');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('A new note was added.');
  //  console.log('--');
  //  console.log(`Title: ${note.title}`);
  //  console.log(`Body: ${note.body}`);
    notes.logNote(note);
  }
  else {
    console.log('This note exists already.');
  }
} else if (command === 'list') {
  console.log('Listing all notes.');
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  console.log('Reading note.');
  var note = notes.getNote(argv.title);
  if (note) {
  //  console.log('--');
  //  console.log(`Title: ${note.title}`);
  //  console.log(`Body: ${note.body}`);
    notes.logNote(note);
  }
  else {
    console.log('The chosen note is not available.');
  }
} else if (command === 'remove') {
  console.log('Removing note.');
  var rv = notes.removeNote(argv.title);
  var message = rv ? 'Note was removed' : 'Note was not removed';
  console.log(message);
} else {
  console.log('Command not recognized.');
}
