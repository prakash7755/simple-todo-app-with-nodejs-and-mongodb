'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const facebookUserSchema = new Schema({
	username: String,
	googleId: String

});

module.exports = mongoose.model('facebookUser', facebookUserSchema);