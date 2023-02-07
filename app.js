const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('dev')); //combined também é interessante
app.use(express.json());

const routeEvents = require('./routes/routineEvents');

app.use('/api/v1', routeEvents);

//construir rotas

module.exports = app;