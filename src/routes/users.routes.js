import { Router } from 'express';
import UserControllers from '../controllers/users.controllers';
import verifyInfosUsersmiddleware from '../middlewares/verifyInfosUsers.middleware';
import verifyIdUsersMiddleware from '../middlewares/verifyIdUsers.middlewares';

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
  verifyIdUsersMiddleware,
  usersControllers.deleteUser,
);

export default usersRouter;
