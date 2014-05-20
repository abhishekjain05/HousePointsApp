(function (controllers) {
    console.log("index.js loaded");
    var notesApi = require("./notes");

    controllers.init = function (router) {
        router.get("/", function(req, res) {
            var environment = process.env.NODE_ENV || 'development';
            res.json({
                environment: environment
            });
        });

        // registering notes routes
        notesApi.init(router);
    };
})(module.exports)