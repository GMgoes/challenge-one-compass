/* eslint-disable linebreak-style */
// Importação Express
const express = require('express');

const app = express();

// Morgan para log das requisições
const morgan = require('morgan');

app.use(morgan('dev'));

// Utilizaremos formato JSON para o nosso express trabalhar
app.use(express.json());

const routeEvents = require('./routes/routineEvents');
// Rota rotinas
const routeUsers = require('./routes/users');
// Rota usuário

app.use('/api/v1', routeEvents);
app.use('/api/v1', routeUsers);

module.exports = app;
