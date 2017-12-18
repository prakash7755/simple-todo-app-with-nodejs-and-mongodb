'use strict';

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
	name : { type: String, required: [true, 'Name Should Not Be Empty']},
	password : { type: String, required: true }
});



module.exports = mongoose.model('user', UserSchema);