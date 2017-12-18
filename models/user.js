'use strict';

const mongoose = require('mongoose')

const UserSchema = new Schema ({
	user_name : String,
	password : String
});



module.exports = mongoose.model('user', UserSchema);