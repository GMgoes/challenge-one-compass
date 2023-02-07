const express = require('express');
const app = express();

const morgan = require('morgan');

app.use(morgan('dev')); //combined também é interessante
app.use(express.json());

const routeEvents = require('./routes/routineEvents');
const routeUsers = require('./routes/users.js');

app.use('/api/v1', routeEvents);
app.use('/api/v1', routeUsers);
//construir rotas

module.exports = app;