'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
    title: String,
    status: String
});


module.exports = mongoose.model('Todo', TodoSchema)