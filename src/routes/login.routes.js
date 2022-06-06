import {Router} from 'express';
import LoginControllers from '../controllers/login.controllers';
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware';

const loginRouter = new Router();
const loginControllers = new LoginControllers;

loginRouter.post('/makeLogin', verifyTokenMiddleware, loginControllers.makeLogin);

export default loginRouter;
