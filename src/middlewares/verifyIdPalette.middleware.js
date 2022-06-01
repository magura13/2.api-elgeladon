import palettes from '../database';

const verifyIdPaletteMiddleware = (req, res, next) => {
  const id = Number(req.params.id);//pega o id e vai encontrar a paleta

  const chosenPalette = palettes.find((elem) => elem.id === id); //a função find puxa o elemento pelo id dele e compara se o id que está vindo é igual, pegando assim e declarando a informação na variável chosenPalette

  if (!chosenPalette) {
   return res.status(404).send(`Palette not found!`)
  }

  next();
};

export default verifyIdPaletteMiddleware;
