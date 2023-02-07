//Importação Express
const express = require('express');
const routeUsers = express.Router();

//Importação Controlador
const controller = require('./../controllers/usersController');

// --- POST
routeUsers.route('/users/signUp').post(controller.sendSignUp) //OK - Need review
routeUsers.route('/users/singIn').post(controller.sendSignIn) //OK - Need review

module.exports = routeUsers;