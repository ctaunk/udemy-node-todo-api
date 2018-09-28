const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
    return;
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectId('5bad72309a21afb54ae63af5')
  // }, {
  //   $set: {
  //     completed: true,
  //     text: 'Start learning nodejs'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: ObjectId('5bae55699a21afb54ae63d21')
  }, {
    $set: {
      name: 'Mike'
    },
    $inc: { age: 2}
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});