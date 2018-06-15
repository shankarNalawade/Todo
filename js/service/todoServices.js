(function () {
    "use strict";
    var app = angular.module("todo_app");

    app.factory("todoServices", ["$http", function ($http) {
        var todoServices = {};

        todoServices.deleteTodo = function (todo, todoList) {
            angular.forEach(todoList, function (value, index) {
                if (todo == value)
                    todoList.splice(index, 1);
            });
            return todoList;
        }


        return todoServices;
    }]);

})();