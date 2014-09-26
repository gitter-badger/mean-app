var express = require('express');
var app = express();
var port = process.env['port'] || 3000;
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/application');


var serverController = require('./server/javascript/server_controllers/server_controller.js');

app.use(bodyParser.json());
app.use('/javascript', express.static(__dirname + '/client/javascript'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/ng-resource', express.static(__dirname + '/node_modules/ng-resource'));
app.set('views', 'client/templates');


app.get('/', function (req, res) {
    var filePath = path.resolve('/../client/templates/index.html');
    res.sendFile(__dirname + filePath);
});

app.get('/list/todo', serverController.printTodo);
app.post('/list/todo', serverController.createTodo);
app.delete('/list/todo', serverController.deleteTodo);

app.listen(port, function () {
    console.log('Listening on port: ' + port);
});