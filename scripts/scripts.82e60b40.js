"use strict";var todo={};todo.mainApp=angular.module("todoAppApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),todo.mainApp.controller("MainCtrl",["$scope","localStorageService",function(a,b){var c=b.get("todos");a.todos=c||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0),a.addTodo=function(){var b=-1==a.todos.indexOf(a.todo);b?(a.todos.push(a.todo),a.errMsg=""):a.errMsg="Duplicate !!!.   Entry already exists ",a.todo=""},a.removeTodo=function(b){var c=b in a.todos;c&&a.todos.splice(b,1),a.errMsg=""}}]),todo.mainApp.controller("AboutCtrl",["$scope",function(a){a.todos=["todo item 1","todo item 2","todo item 3"]}]),angular.module("todoAppApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class=""> <div class="row text"> <div class="col-xs-12 alignC"> <h1>My todos</h1> </div> </div> <div class="row"> <form role="form" ng-submit="addTodo()"> <div class="col-xs-12 col-sm-offset-1 col-sm-pull-1 col-sm-11"> <div class="input-group"> <input type="text" ng-model="todo" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="submit" class="btn btn-primary" value="Add To Do"> </span> </div> </div> <div class="col-xs-12 col-sm-offset-1 col-sm-pull-1 col-sm-11 error-container"> <span> {{errMsg}} </span> </div> </form> </div> <div class="row" ui-sortable ng-model="todos"> <div class="main-todo-container col-xs-12 col-sm-5 col-md-3 col-sm-offset-1 col-sm-pull-1 mbm mtm" ng-repeat="todo in todos"> <div class=""> <div class="todo-container input-group"> <input type="text" ng-model="todo" class="form-control todo-element"> <span class="input-group-btn"> <button class="btn btn-danger" ng-click="removeTodo($index)" aria-label="Remove">X</button> </span> </div> </div> </div> </div> </div>')}]);