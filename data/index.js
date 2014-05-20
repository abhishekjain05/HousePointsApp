(function (data) {
    var database = require("./database");
    data.getNoteCategories = function (next) {
        database.getDb(function(err, db) {
            if (err) {
                console.log("Failed to retrieve database - " + err);
                next(err, null);
            } else {
                console.log("Successfully retrieved database.");
                db.notes.find().sort({name: 1}).toArray(function (errNotes, results) {
                    if (errNotes) {
                        next(errNotes, null);
                    } else {
                        next(null, results); 
                    }
                });
            }
        });
    };


})(module.exports)