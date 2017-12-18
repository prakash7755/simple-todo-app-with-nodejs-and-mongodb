'use strict';
const Todo = require('./modules');

module.exports = app => {
	/*
	 * All Todo Task Get
	 */
	app.get('/', (req, res) => {
		Todo.find({})
		.then(todo => res.json(todo));
		.catch(next);
	});

	/*
	 *
	 */
};