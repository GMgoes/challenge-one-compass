/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação Express
const express = require('express');

const routeUsers = express.Router();

// Importação Controlador
const controller = require('../controllers/usersController');

// --- POST
routeUsers.route('/users/signUp').post(controller.sendSignUp); // OK
routeUsers.route('/users/signIn').post(controller.sendSignIn); // OK

module.exports = routeUsers;
