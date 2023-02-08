/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação Express
const express = require('express');

const routeEvents = express.Router();

// Importação Controlador
const controller = require('../controllers/routineController');

// --- GET
routeEvents.route('/events').get(controller.getAllRoutines); // OK
routeEvents.route('/eventss/:dayOfTheWeek').get(controller.getRoutinesDay); // OK
routeEvents.route('/events/:id').get(controller.getRoutine); // OK

// --- POST
routeEvents.route('/events').post(controller.sendRoutine); // OK

// --- DELETE
routeEvents.route('/events/:id').delete(controller.deletRoutine); // OK
routeEvents.route('/eventss/:dayOfTheWeek').delete(controller.deletRoutineDay); // OK

module.exports = routeEvents;
