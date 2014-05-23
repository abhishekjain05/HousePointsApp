var express = require('express');
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

console.log('running');



/**
 * Development Settings
 */
if (app.get('env') === 'development') {
    console.log("development");
    // This will change in production since we'll be using the dist folder
    // This covers serving up the index page
    app.use(express.static(path.join(__dirname, './client/.tmp')));
    app.use(express.static(path.join(__dirname, './client/app')));

    // Error Handling
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

/**
 * Production Settings
 */
if (app.get('env') === 'production') {
    console.log("production");
    // changes it to use the optimized version for production
    app.use(express.static(path.join(__dirname, '/server/dist'))); 

    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

// Register routes
var router = express.Router();   
var allRoutes = require("./server/routes/index");
allRoutes.init(router);

// All routes will be prefixed with /api
app.use('/api', router);
module.exports = app;
