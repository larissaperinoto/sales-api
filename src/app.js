const express = require('express');

const app = express();

const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());

const router = require('./routes');

// app.get('/test', async (req, res) => res.send('Hello World!'));
app.use(router);
app.use(errorMiddleware);

module.exports = app;
