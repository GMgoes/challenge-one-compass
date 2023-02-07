const express = require('express');

const controller = require('./../controllers/routineController');

const routeEvents = express.Router();

//GET
routeEvents.route('/events').get(controller.getAllRoutines) //OK
/* routeEvents.route('/events/:dayOfTheWeek').get(controller.getRoutinesDay) //TODO */
routeEvents.route('/events/:id').get(controller.getRoutine) //OK

//POST
/* routeEvents.route('/users/singUp).post(controller.sendUser) //TODO */
/* routeEvents.route('/users/singIn).post(controller.sendLogin) //TODO */
routeEvents.route('/events').post(controller.sendRoutine) //OK

//DELETE
routeEvents.route('/events/:id').patch(controller.deletRoutine) //OK
/* routeEvents.route('/events/:dayOfTheWeek').patch(controller.deletRoutine) //TODO */

module.exports = routeEvents;