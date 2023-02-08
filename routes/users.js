/* eslint-disable linebreak-style */

// Importação Express
import { Router } from 'express';

// Importação Controlador
import {
  sendSignUp, sendSignIn,
} from '../controllers/usersController';

const routeUsers = Router();

// --- POST
routeUsers.route('/users/signUp').post(sendSignUp); // OK
routeUsers.route('/users/signIn').post(sendSignIn); // OK

export default routeUsers;
