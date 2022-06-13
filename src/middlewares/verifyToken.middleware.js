import jwt from 'jsonwebtoken';

const verifyTokenMiddleware = (req, res, next) => {
  //verificar se o token foi enviado
  const token = req.headers.authorization;

  if (token === undefined) {
    return res.status(401).send({ message: 'Token not found' });
  }
  //verificar se o token é valido
  jwt.verify(token, 'secret-token', (error, decoded) => {
    if (error) {
     return res.status(401).send({ message: 'Token invalid' });
    }

    next();
  });
};

export default verifyTokenMiddleware;
