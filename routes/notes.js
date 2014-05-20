(function (notesApi) {
    var data = require('../data');
    console.log("notes.js loaded");
    notesApi.init = function (router) {
        router.get("/notes", function(req, res) {
            data.getNoteCategories(function(error, results) {
                res.json({
                    categories: results
                });
            });
        });
    };
})(module.exports)