'use strict';

(function(){

	function todoListController(){
		var vm = this;

		vm.$onInit = function(){
			
		}
	}

 const tamplateUrl ='./component/todo-list/component.html';

 const bind = { };

 const controller = [todoListController];

 const todoListComponent = { tamplateUrl, bind, controller}

 angular.module('todoApp')
 		.component('todoListComponent', todoListComponent)

})();