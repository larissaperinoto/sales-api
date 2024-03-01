const express = require('express');

const app = express();

app.use(express.json());

app.use('/', () => { return 'Hello World!'});


module.exports = app;