'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const googleUserSchema = new Schema({
	username: String,
	googleId: String

});

module.exports = mongoose.model('googleUser', googleUserSchema);