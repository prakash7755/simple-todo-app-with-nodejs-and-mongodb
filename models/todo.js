'use strict';

const mongoose = require('mongoose');

const TodoSchema = new Schema({
    title: String,
    status: String
});


module.exports = mongoose.model('Todo', TodoSchema)