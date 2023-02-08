/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação Express
const express = require('express');

const routeEvents = express.Router();

// Importação Controlador
const controller = require('../controllers/routineController');

// --- GET
routeEvents.route('/events').get(controller.getRoutines); // OK - Sem Query ou com Query (?dayOfTheWeek)
routeEvents.route('/events/:id').get(controller.getRoutine); // OK - Params

// --- POST
routeEvents.route('/events').post(controller.sendRoutine); // OK - Params - Need review(Validar campos)

// --- DELETE
routeEvents.route('/event/:id').delete(controller.deletRoutine); // OK - Params - Need review(Validar campos)
routeEvents.route('/events').delete(controller.deletRoutineDay); // OK - Query - Need review(Validar campos)

module.exports = routeEvents;
