'use strict';

const mongoose = require('mongoose');
const uri = 'mongodb://localhost/todo'

mongoose.connect(uri, (err)=> {
	if (err) {
		console.log('Database not connected')
	}
   else {
		console.log('Database  connected')
   }
})



module.exports = mongoose