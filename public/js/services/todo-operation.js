'use strict';

( function() {
	angular.moudule('todoApp')

	.factory('todoOperation',['$http', todoOperation]);

	function todoOperation($http){

           /*
            * Add todo List 
            */
            function addTodoList(data) {
            	return $http.post('/api/todo', data)
            	.then(res => {
            		return res.data
            	})
            	.catch( err => {
            		console.error(err)
            	})
            }


           /*
            * Show todo List 
            */


            function showTodoList(){
            	return $http.get('/api/todo')
            	.then(res => {
            		return res.data
            	})
            	.catch(err => {
            		console.error(err)
            	})
            }


           /*
            * Delete todo List 
            */


            function DeleteTodoList(id){
            	return $http.delete('/api/todo/'+ id)
            	.then(res => {
            		return res.data
            	})
            	.catch(err => {
            		console.error(err)
            	})
            }

            return {
            	addTodoList,
            	showTodoList,
            	DeleteTodoList
            }

        }
    })();