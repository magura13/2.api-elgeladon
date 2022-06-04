const verifyInfosUsersmiddleware = (req, res, next) => {
  const { email, name, password } = req.body;

  if (!email || !name || !password) {
    return res.status(422).send(`Information incomplete or invalid!`);
  }
  next();
};

export default verifyInfosUsersmiddleware;
