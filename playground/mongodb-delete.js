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
  
  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Andrew'});
  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b5d20ff8c667111d0321da4")})
    .then((result)=> {
      console.log(JSON.stringify(result, undefined, 2));
    });
  
  
  // client.close();
});
