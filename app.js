var express = require('express');
var app = express();

console.log('running');

var router = express.Router();   

var environment = process.env.NODE_ENV || 'development';

// Register routes
// TODO - refactor and put them in individual files based on feature
router.get("/", function(req, res) {
    res.json({
        envFromExpress: app.get('env'),
        envFromNode: environment
    });
});

app.use('/', router);
module.exports = app;
