'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const app = express();
const port = 3000;








app.listen(port, (err)=> {
	if (err) {
		console.log('Port Not connect ' + port);
	}
	else {
	     console.log('Port Will Be connect at ' + port);
	}
})