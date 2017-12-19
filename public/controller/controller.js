'use strict';
( function(){
	const todo = angular.module('todoApp', []);
	todo.controller('todoCtrl', ['$scope', 'HttpServ', function($scope, HttpServ){

		HttpServ.getTodos()
		.then(todos =>{
			$scope.title = todos;
		})

	}])
})()
