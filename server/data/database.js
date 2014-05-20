(function (database) {
    var mongodb = require("mongodb");
    var dbUtils = require("./dbUtils");

    var connectionString = dbUtils.getConnectionString();

    console.log(connectionString);
    var theDb = null;
    database.getDb = function(next) {
        if (!theDb) {
            // connect to database
            mongodb.MongoClient.connect(connectionString, function(err, db) {
                if (err) {
                    next(err, null);
                } else {
                    theDb = {
                        db: db,
                        notes: db.collection("notes")
                };
                    next(null, theDb);
                }
            });
        } else {
            next(null, theDb);
        }

    }

})(module.exports)