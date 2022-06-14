import User from '../models/users.model.js';
import bcryptjs from 'bcryptjs';

class UsersServices {
  async getAllUsers() {
    const users = await User.find();

    if (users.length === 0) {
      throw {
        status: 404,
        message: 'No users found!',
      };
    }
    return users;
  }

  async findByIdUsers({ id }) {
    const chosenUsers = await User.findById(id);

    return chosenUsers;
  }

  async createNewUser({ email, name, password, admin = false }) {
    const cryptPassword = await bcryptjs.hash(password, 8);
    
    const newUser = {
      email,
      name,
      password: cryptPassword,
      admin,
    };
    try {
      const user = await User.create(newUser); //User = vem do meu model // create = query(passando o objeto criado lá no model)

      return user; //retornando o user
    } catch (err) {
      throw err;
    }
  }

  async updateUser({ email, name, password, admin, id }) {
    const updatedUser = { email, name, password, admin };

    try {
      await User.updateOne({ _id:id}, updatedUser);//pelo update one tenho que passar _id:id, findById somente id

      const user = await User.findById(id);

      return user;
    } catch (err) {
      throw err;
    }
  }

    async deleteUser(id) {
    const user = await User.findByIdAndDelete(id);

    return user;
  }
}

export default UsersServices;
