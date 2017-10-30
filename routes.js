var express = require('express');
var app = express();
var db = require('./config/database');

var AlcoholController = require('./controllers/AlcoholController');
app.use('/whiskey', AlcoholController);

module.exports = app;
