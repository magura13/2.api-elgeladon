import {Router} from 'express';
import LoginControllers from '../controllers/login.controllers.js';

const loginRouter = new Router();
const loginControllers = new LoginControllers;

loginRouter.post('/makeLogin', loginControllers.makeLogin);

export default loginRouter;
