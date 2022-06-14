import User from '../models/users.model.js';
import mongoose from 'mongoose';

const verifyIdUsersMiddleware = async (req, res, next) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: 'Id Invalid' });
    return;
  }

  const chosenUser = await User.findById(id);

  if (!chosenUser) {
    return res.status(404).send(`User not found!`);
  }

  next();
};

export default verifyIdUsersMiddleware;
