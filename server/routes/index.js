(function (controllers) {
    console.log("index.js loaded");
    var notesApi = require("./notes");

    controllers.init = function (router) {
        router.get("/", function(req, res) {
            var environment = process.env.NODE_ENV || 'development';
            var connectionString = process.env.myConnectionString || "localConnectionString";
            res.json({
                environment: environment,
                connectionString: connectionString
            });
        });

        // registering notes routes
        notesApi.init(router);
    };
})(module.exports)