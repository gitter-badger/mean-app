app.controller('todoCtrl', ['$scope', "$resource", function ($scope, $resource) {

    var TodoResource = $resource('/list/todo');
    resource = new TodoResource();

    TodoResource.query(function (results) {
        $scope.items = results;
    });

    $scope.items = [];
    $scope.createTodo = function () {
        resource.name = $scope.todoName;
        if ($scope.todoName == null) {
            console.log('Your push is empty!');
        } else {
            resource.$save(function (result) {
                $scope.items.push(result);
                console.log(result)
            });

        }
    }


    $scope.deleteTodo = function () {
        resource.$delete(function (err) {
            if (err) {
                console.log('Error Deleting your Data');
            } else {
                console.delete('Data Deleted!')
            }
        })
    }


}]);