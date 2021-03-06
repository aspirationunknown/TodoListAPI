var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var Task = require('./api/models/todoListModel');
var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);

console.log('Todo list RESTful API started on port: ' + port);
