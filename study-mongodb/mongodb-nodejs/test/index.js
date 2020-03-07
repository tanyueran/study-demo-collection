var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://user:password@localhost:27017/admin', function (err, db) {
  if (err) {
    throw err;
  }
  console.log('连接成功');
  let client = db.db('mydb');
  client.collection('user', (err, f) => {
    if (err) throw err;
    f.insert({
      a: 3,
    }, (err, result) => {
      f.find({ 'a': 4 }).toArray(function (err, docs) {
        console.log(docs);
      });
      db.close();
    });
  })
});