const express = require('express');

const controller = require('./../controllers/routineController');

const routeEvents = express.Router();

//GET
routeEvents.route('/events').get(controller.getAllRoutines) //OK
/* routeEvents.route('/events/:dayOfTheWeek').get(controller.getRoutinesDay) */ // In progress
/* routeEvents.route('/events/:id').get(controller.getRoutine) //OK */

//POST
routeEvents.route('/events').post(controller.sendRoutine) //OK

//DELETE
routeEvents.route('/events/:id').delete(controller.deletRoutine) //OK
/* routeEvents.route('/events/:dayOfTheWeek').patch(controller.deletRoutine) //TODO */

module.exports = routeEvents;