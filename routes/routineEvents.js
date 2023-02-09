/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação Express
const express = require('express');

const routeEvents = express.Router();

// Importação Controlador
const controller = require('../controllers/routineController');

// --- GET
routeEvents.route('/events').get(controller.getRoutines); // OK - Validado
routeEvents.route('/events/:id').get(controller.getRoutine); // OK - Validado

// --- POST
routeEvents.route('/events').post(controller.sendRoutine); // OK - Validado

// --- DELETE
routeEvents.route('/events/:id').delete(controller.deletRoutine); // OK - Validado
routeEvents.route('/events').delete(controller.deletRoutineDay); // OK - Validado

module.exports = routeEvents;
