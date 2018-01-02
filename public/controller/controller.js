'use strict';
( function(){
	const todo = angular.module('todoApp', []);
	todo.controller('TodoCtrl', [ 'UserAuth', TodoCtrl]);

	function TodoCtrl(UserAuth){
		const vm = this;
		vm.user = {};

		vm.userVerification = () => {
              UserAuth.login(vm.user)
              .then(data => console.log(data))
		}
	}
})()
