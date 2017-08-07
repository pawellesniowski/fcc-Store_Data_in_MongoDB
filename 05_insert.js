const mongo = require("mongodb").MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var docu = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    };

mongo.connect(url, (err, db)=>{
    if(err) throw err;
    db.collection('docs').insert(docu, (err, data)=>{
        if(err) throw err;
        console.log(JSON.stringify(docu));
        db.close();
    })
})