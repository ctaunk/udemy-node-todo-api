var {ObjectID} = require('mongodb');

var {mongoose} = require('../server/db/mongoose');
var {Todo} = require('../server/models/todo');
var {User} = require('../server/models/user');

// var id = '5bb3ee869a1c5c0b78d64361';

// if (!ObjectID.isValid(id)) {
//   console.log('Id is not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//   console.log('Todo', todo)
// });

//assignment
//User.findById - handle missing user, found user, invalid id

var id = '5bb29a63c8867871dc0209c9';
var nonexistentId = '6bb29a63c8867871dc0209c9';
var invalidId = '5bb29a63c8867871dc0209c9xx';


User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user)
});

User.findById(nonexistentId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user)
});

User.findById(invalidId).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User', user)
}, (e) => { console.log('Error looking up user', e)});
  