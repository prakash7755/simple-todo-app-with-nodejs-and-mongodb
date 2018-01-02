'use strict';
( function(){

	function createTodoOperation(){
		const vm = this;

		vm.$onInit = () => {
			
		}
	}

	const templateUrl = './component/create-todo-operation/component.html';

	const bind = { };

	const controller = [createTodoOperation]

	const createTodoOperationComponent = {templateUrl, bind, controller}

	angular.module('todoApp')
			.component('createTodoOperationComponent', createTodoOperationComponent)
})();