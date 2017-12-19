'use strict';
(function(){
	angular.module('todoApp')
	.factory('HttpServ', ['$http', HttpServ]);

	function HttpServ($http) {

		function getTodos(){
			return $http.get('/api/todo_list')
			.then((todos)=>{
				return todos.data;
			})
			.catch(err=>{
				console.log(err)
			});
		};
		return {
			getTodos

		}
	}
})();