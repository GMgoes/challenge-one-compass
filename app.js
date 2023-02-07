//Importação Express
const express = require('express');
const app = express();

//Morgan para log das requisições
const morgan = require('morgan');
app.use(morgan('dev'));

//Utilizaremos formato JSON para o nosso express trabalhar
app.use(express.json());

//Rota rotinas
const routeEvents = require('./routes/routineEvents');
//Rota usuário
const routeUsers = require('./routes/users.js');

app.use('/api/v1', routeEvents);
app.use('/api/v1', routeUsers);

module.exports = app;