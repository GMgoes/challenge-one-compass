const express = require('express');

const controller = require('./../controllers/usersController');

const routeUsers = express.Router();

//POST
routeUsers.route('/users/signUp').post(controller.sendSignUp) //TODO 
/* routeUsers.route('/users/singIn).post(controller.sendLogin') //TODO */

module.exports = routeUsers;