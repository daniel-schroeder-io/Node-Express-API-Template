// server/router/router.js
var logger = require('../lib/logger');
module.exports = function (app) {
    app.use(logger);

    app.get('/', function (req, res, next) {
        res.status(200).send("Welcome");
    });

    app.use('/collection', require('./collections/collection'));

    // Catch all
    app.use('*', function (req, res, next){
        res.status(404).json({err: "Path" + req.originalUrl + " does not exist"});
    });

};