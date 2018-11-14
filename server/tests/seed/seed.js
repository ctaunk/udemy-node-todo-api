const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
  }, {
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: false,
    completedAt: 42
  }];

const populateTodos = (done) => {
  Todo.deleteMany({}).then(() => {
    Todo.insertMany(todos);
  }).then(() => done());
}

const user1Id = new ObjectID();
const user2d = new ObjectID();
const users = [{
  _id: user1Id,
  email: 'me@example.local',
  password: 'user1Pass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id: user1Id, access: 'auth'}, 'abc123').toString()
  }]
  }, {
    _id: user2d,
    email: 'you@example.local',
    password: 'user2Pass'
  }];

const populateUsers = (done) => {
  User.deleteMany({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};