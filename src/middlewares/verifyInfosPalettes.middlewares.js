const verifyInfosPalettesMiddleware = (req, res, next) => {
  const { flavor, description, img, price } = req.body;

  if (!flavor || !description || !img || !price) {
    return res.status(422).send(`Information incomplete or invalid!`);
  }
  next();
};

export default verifyInfosPalettesMiddleware;
