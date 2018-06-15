(function () {
    "use strict";
    var app = angular.module("todo_app");

    app.factory("localstorage_service", ["$http", function ($http) {

        var local_storage = {};
        local_storage.set_todo_list = function (array_list) {
            localStorage.setItem("todos", JSON.stringify(array_list));
            return true;
        };
        local_storage.get_todo_list = function () {
            var storedData = localStorage.getItem("todos");
            if (storedData) {
                return JSON.parse(storedData);
            } else {
                return false;
            }
        };



        return local_storage;
    }]);
})();