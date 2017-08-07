const mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = +process.argv[2];

mongo.connect(url, (err, db)=>{
    if (err) throw err;
    db.collection('parrots').find({
        age: {
            $gt: age
        }
    }, {
        _id:0,
        name:1,
        age:1
    }).toArray((err, docs)=>{
        if (err) throw err;
        console.log(docs);
        db.close();
    });
});