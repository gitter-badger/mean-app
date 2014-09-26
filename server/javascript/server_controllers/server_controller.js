var path = require('path');
var schemaPath = path.resolve('server/mongoDB/todo_model.js');
var DbSchema = require(schemaPath);


module.exports.printTodo = function (req, res) { // Print TODO List

    DbSchema.find({}, function (err, data) {
        if (err) {
            console.log('Error: ' + err);
        }
        res.json(data);

    });
}

module.exports.createTodo = function (req, res) { // Create TODO It

    var todoModel = new DbSchema(req.body);
    todoModel.save(function (err, data) {
        if (err) {
            console.log("Error creating TODO: " + err)
        } else {
            res.json(data);
        }

    });

}


module.exports.deleteTodo = function (req, res) {
    DbSchema.remove({}, function (err, data) {
        if (err) {
            console.log('File(s) not removed')
        }
        res.json(data);
    });
}