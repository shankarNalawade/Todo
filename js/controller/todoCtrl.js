(function () {
    var app = angular.module("todo_app");
    "use strict";
    app.controller("todoCtrl", ["$scope", "localstorage_service", "todoServices", function ($scope, localstorage_service, todoServices) {
        $scope.todos = [];
        $scope.status = 'all';
        $scope.todos = localstorage_service.get_todo_list() || [];
        console.log("Todo list", $scope.todos);
        /* Add new todo item in list function */
        $scope.add_new = function () {
            if ($scope.newTodo != '') {
                var obj = {
                    title: $scope.newTodo,
                    completed: false
                };
                $scope.todos.push(obj);
                $scope.newTodo = '';
                localstorage_service.set_todo_list($scope.todos);
            }
        };
        /* Check list function */
        $scope.checkListChange = function () {
            localstorage_service.set_todo_list($scope.todos);
        };

        /* Delete todo item from list function */
        $scope.deleteTodo = function (todo) {
            $scope.todos = todoServices.deleteTodo(todo, $scope.todos);
            localstorage_service.set_todo_list($scope.todos);
        };

        /* filter status changed function */
        $scope.fliterTodos = function (status) {
            $scope.status = status;
        }
    }]);

    app.directive("checkstatus", function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.on("click", function () {
                    var parent = element.parent();
                    parent.find("li").removeClass("activeList");
                    element.addClass("activeList");

                })
            }
        }
    });



}());