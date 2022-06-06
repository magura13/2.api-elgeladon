import User from '../models/users.model';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

class LoginServices {
  async makeLogin({ email, password }) {
    const user = await User.findOne({ email: email });

    if (!user) {
      return {status: 400, message: 'Email not found'};
    }

    const validPassword = await bcryptjs.compare(password, user.password)

    if (validPassword === false) {
      return {status: 400, message: 'Password is incorrect'};
    }

    const token  = jwt.sign({email: email}, 'secret-token', {expiresIn: '24h',})

    return {status: 200, token: token};
  }
}

export default LoginServices;
