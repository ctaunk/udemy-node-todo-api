const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  // db.collection('Todos').find({
  //   _id: new ObjectId('5baac3f4ec34247478fa75b1')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to getch Todos', err);
  // });
  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to get Todos', err);
  // });
  db.collection('Users').find({
    name: 'Mike'
  }).toArray().then((users) => {
    console.log('Users');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to get Users', err);
  });
  client.close();
});