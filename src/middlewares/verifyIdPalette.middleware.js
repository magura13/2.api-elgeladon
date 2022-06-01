import Palette from '../models/palettes.model';
import mongoose from 'mongoose';

const verifyIdPaletteMiddleware = async (req, res, next) => {
  const id = req.params.id; //pega o id e vai encontrar a paleta

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).send({ message: 'ID inválido!' });
    return;
  }

  const chosenPalette = await Palette.findById(id); //a função find puxa o elemento pelo id dele e compara se o id que está vindo é igual, pegando assim e declarando a informação na variável chosenPalette

  if (!chosenPalette) {
    return res.status(404).send(`Palette not found!`);
  }

  next();
};

export default verifyIdPaletteMiddleware;
