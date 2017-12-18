'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const models = require('./models/')
const port = 3000;

app.use(bodyParser.urlencoder({extended: true}));
app.use(bodyParser.json());


require('./routes')(app);



app.listen(port, () => console.log('TODO Operation Listen on Port No ' + port))