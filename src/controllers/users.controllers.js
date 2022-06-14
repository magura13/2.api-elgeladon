import UsersServices from '../services/user.services.js';

const usersService = new UsersServices();

class UserControllers {
  async getAllUsers(req, res) {
    try {
      const users = await usersService.getAllUsers();

      res.send(users);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  async getByIdUsers(req, res) {
    const id = req.params.id; //recebo pelo req o id do cliente

    const users = await usersService.findByIdUsers({ id });

    res.send(users); //send pelo res o user de volta ao cliente
  }

  async createNewUser(req, res) {
    const { email, name, password, admin } = req.body;

    try {
      const newUser = await usersService.createNewUser({
        email,
        name,
        password,
        admin,
      });

      res.status(201).send(newUser);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Email Already registered');
      }
    }
  }

  async updateUser(req, res) {
    const { email, name, password, admin } = req.body;
    const id = req.params.id;

    try {
      const updatedUser = await usersService.updateUser({
        email,
        name,
        password,
        admin,
        id,
      });

      res.status(200).send(updatedUser);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).send('Already registered');
      }
    }
  }

  async deleteUser(req, res) {
    const id = req.params.id;

    const user = await usersService.deleteUser(id);

    res.status(200).send(user);
  }
}

export default UserControllers;
