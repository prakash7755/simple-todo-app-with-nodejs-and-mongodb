'use strict';

(function () {
	 angular.module('myApp')
        .controller('TodoCtrl', ['TodoServ', TodoCtrl])

        function TodoCtrl(TodoServ){
       
        const setToken = token => localStorage.token = token;


        	const vm = this;
            TodoServ.getList()
                .then(data => {
                   vm.todos = data
                })


         vm.addTodoLists = () => {
         	console.log(vm.todo)
         	TodoServ.addTodoList(vm.todo)
                 .then( data => {
                 
                 })
         }


         vm.deleteProduct = (index) =>{
         var id = vm.todos[index]._id;
         	console.log(id)
         	TodoServ.DeleteTodoList(id)
         	.then( data => {
         	})

         }

}

        
})();