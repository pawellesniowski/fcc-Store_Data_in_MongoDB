var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(url, (err, db)=>{
    if(err) throw new Error('fail to connect to db');
    // no errors,  so get the collection:
    db.collection('parrots').find({
        age: {
            $gt: age
        }
    }).toArray((err, docs)=>{
        if(err) throw new Error('fail to write to array');
        // no errors,  so console log results:
        console.log(docs);
        db.close();
    }); 
});