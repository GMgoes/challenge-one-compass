const express = require('express');

const controller = require('./../controllers/usersController');

const routeUsers = express.Router();

//POST
routeUsers.route('/users/signUp').post(controller.sendSignUp) //OK - Need review
routeUsers.route('/users/singIn').post(controller.sendSignIn) //OK - Need review

module.exports = routeUsers;