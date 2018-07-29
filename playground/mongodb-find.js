// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  
  // db.collection('Todos').find({ 
  //   _id: new ObjectID('5b5d190fae780c25f0d13821')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }).catch((err) => {
    console.log('Unable to fetch todos', err);
  });
  
  // client.close();
});
