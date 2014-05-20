var express = require('express');
var app = express();

console.log('running');

var router = express.Router();   

var environment = process.env.NODE_ENV || 'development';

// Register routes
var allRoutes = require("./routes/index");
allRoutes.init(router);

// All routes will be prefixed with /api
app.use('/api', router);
module.exports = app;
