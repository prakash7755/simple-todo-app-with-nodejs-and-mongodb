'use strict';
const todoRouter = require('./todo');
module.exports = app => {

	app.use('/api/todo', todoRouter);

};