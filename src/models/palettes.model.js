import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PaletteSchema = new Schema(
  {
    flavor: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false },
);

const Palette = model('palettes', PaletteSchema); //informando ao mongoose que quero que crie um modelo a partir do Schema criado anteriormente, passo também o nome da coleção criada no MongoDB

export default Palette;
