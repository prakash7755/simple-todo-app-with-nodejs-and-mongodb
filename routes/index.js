'use strict';
const Todo = require('./models/index.js');

module.exports = app => {
	/*
	 * All Todo Task Get
	 */
	 app.get('/api/todo_list', (req, res) => {
	 	Todo.find({})
	 	.then(todo => res.json(todo))
	 	.catch(next)
	 });


	/*
	 * Insert New Todo Operation 
	 */

	 app.post('/api/creat_todo_operation', (req, res) => {
	 	const { title, status } = req.body || { }

	 	if (!title || !status) {
	 		const error = console.error('Bad Requiest')
	 		return next(error);
	 	}

	 	const todo = new Todo({title, status})

	 	todo.save()
	 	.then(doc => res.json(doc))
	 	.catch(next)
	 })


	 /*
	  * Finished Todo Operation Delete
	  */

	  app.dalete('/api/todo_list/:id', (req, res)=> {
	  	const id = req.params.id;
	  	Todo.findByIdAnddelete( id )
	  	.then(doc => res.json(doc))
	  	.catch(next)
	  })


	  /*
	   * Any Changes In todo Operation
	   */

	   app.put('/api/todo_list/:id', (req, res) => {
	   	const id = req.params.id;
	   	if (!id) {
	   		const error = console.error('Given Todo Operation Not Be Empty');
	   		return next(error)
	   	}
	   	const data = { 
	   		title: req.body.title,
	   		status: req.body.status
	   	}

	   	Todo.findByIdAndUpdate( id, data,{ new : true})
	   	.then(doc => res.json(doc))
	   	.catch(next)


	   	/*
         * Handle Errors
         */ 

         app.use((error, req, res, next) => {
         	const { message } = error || {};
         	const isSuccess = false
         	;	res.json({message, isSuccess})
         })

     })
	};