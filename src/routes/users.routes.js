import { Router } from 'express';
import UserControllers from '../controllers/users.controllers.js';
import verifyInfosUsersmiddleware from '../middlewares/verifyInfosUsers.middleware.js';
import verifyIdUsersMiddleware from '../middlewares/verifyIdUsers.middlewares.js';
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

const usersControllers = new UserControllers();
const usersRouter = Router();

usersRouter.get('/getAllUsers', usersControllers.getAllUsers);
usersRouter.get(
  '/getByIdUsers/:id',
  verifyIdUsersMiddleware,
  usersControllers.getByIdUsers,
);
usersRouter.post(
  '/createNewUser',
  verifyInfosUsersmiddleware,
  usersControllers.createNewUser,
);
usersRouter.put(
  '/updateUser/:id',
  verifyIdUsersMiddleware,
  verifyInfosUsersmiddleware,
  usersControllers.updateUser,
);
usersRouter.delete(
  '/deleteUser/:id',
  verifyTokenMiddleware,
  verifyIdUsersMiddleware,
  usersControllers.deleteUser,
);

export default usersRouter;
