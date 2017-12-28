'use strict';

const todoRouter = require('./todo');
const userRouter = require('./user-auth');
const googleUser = require('./google-user');
module.exports = app => {

	app.use('/api/todo', todoRouter);
	app.use('/api/auth', userRouter);
	app.use('/auth', googleUser);

};