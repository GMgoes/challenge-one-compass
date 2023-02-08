/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */

// Importação Express
import { Router } from 'express';

// Importação Controlador
import {
  getAllRoutines, getRoutinesDay, getRoutine, sendRoutine, deletRoutine, deletRoutineDay,
} from '../controllers/routineController';

const routeEvents = Router();

// --- GET
routeEvents.route('/events').get(getAllRoutines); // OK
routeEvents.route('/eventss/:dayOfTheWeek').get(getRoutinesDay); // OK
routeEvents.route('/events/:id').get(getRoutine); // OK

// --- POST
routeEvents.route('/events').post(sendRoutine); // OK

// --- DELETE
routeEvents.route('/events/:id').delete(deletRoutine); // OK
routeEvents.route('/eventss/:dayOfTheWeek').delete(deletRoutineDay); // OK

export default routeEvents;
