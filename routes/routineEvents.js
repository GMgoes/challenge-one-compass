const express = require('express');

const controller = require('./../controllers/routineController');

const routeEvents = express.Router();

//GET
routeEvents.route('/events').get(controller.getAllRoutines) //OK - Need review
/*routeEvents.route('/events/:dayOfTheWeek').get(controller.getRoutinesDay)*/ // In progress
routeEvents.route('/events/:id').get(controller.getRoutine) //OK - Need review 

//POST
routeEvents.route('/events').post(controller.sendRoutine) //OK - Need review

//DELETE
routeEvents.route('/events/:id').delete(controller.deletRoutine) //OK - Need review
/*routeEvents.route('/events/:dayOfTheWeek').patch(controller.deletRoutine)*/ //TODO

module.exports = routeEvents;