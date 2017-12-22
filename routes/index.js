'use strict';
const todoRouter = require('./todo');
const userAuth = require('./user-auth')
module.exports = app => {

	app.use('/api/todo', todoRouter);
	app.use('/api/auth', userAuth);

};