//server.js
require('dotenv').config();
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// router ======================================================================
require('./router/router')(app);

app.listen(port, function(){
    console.log("Server running on port : 3000");
});