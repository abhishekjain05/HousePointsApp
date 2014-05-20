(function (notesApi) {
    console.log("notes.js loaded");
    notesApi.init = function (router) {
        router.get("/notes", function(req, res) {
                res.json({
                    notes: "some notes"
            });
        });
    };
})(module.exports)