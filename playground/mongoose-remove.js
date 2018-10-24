var {ObjectID} = require('mongodb');

var {mongoose} = require('../server/db/mongoose');
var {Todo} = require('../server/models/todo');
var {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
Todo.findByIdAndRemove('5bc126a1b78a49ca7c980656').then((todo) => {
  console.log(todo);
})