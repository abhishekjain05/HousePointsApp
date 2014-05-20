(function (dbUtils) {
    var dbconfig = require("./dbconfig");
    console.log('dbUtils loaded');
    var getConnectionString = function() {
        var environment = process.env.NODE_ENV || 'development';
        var connectionString;
        if (environment === 'development') {
            connectionString = dbconfig.connectionString;
        }
        if (environment === 'production') {
            connectionString = process.env.myConnectionString;
        }
        return connectionString;
    } 

    dbUtils.getConnectionString= getConnectionString;

})(module.exports)