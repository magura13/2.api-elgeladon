import PalettesServices from '../services/palettes.services';
//importando a classe com os services
//o controller vai chamar o services para fazer a rota

const palettesService = new PalettesServices();
//instânciando a classe

//a função do controller recebe o request e o response
class PaletteControllers {
  getAllPalettes(req, res) {
    try {
      //a função getAllPalettes: crio uma variável que recebe o new PalettesServices e chama dentro da classe a função getAllPalettes
      const palettes = palettesService.getAllPalettes();

      //res.send(palettes); manda a response para o cliente das informações contidas na palettes
      res.send(palettes);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  getByIdPalettes(req, res) {
    const id = Number(req.params.id); //o req traz informações do body

    const palettes = palettesService.findByIdPalette(id); //a variável está indo lá no meu service, chamando a função findByIdPalette, a função recebe o req.params.id que veio do param

    res.send(palettes); //envio o res.send(palettes) para o cliente
  }

  createNewPalette(req, res) {
    const { flavor, description, img, price } = req.body; //acrescentando a cada variável a informação que vem do req.body em sua respectiva

    try {
      const newPalette = palettesService.createNewPalette(
        flavor,
        description,
        img,
        price,
      ); //as informações que estão vindo do req.body em sua respectiva vai sendo enviada ao service onde ele cria uma nova

      res.status(201).send(newPalette);
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  }

  updatePalette(req, res) {
    const { flavor, description, img, price } = req.body;
    const id = Number(req.params.id);

    const updatedPalette = palettesService.updatePalette({
      flavor,
      description,
      img,
      price,
      id,
    });

    res.status(200).send(updatedPalette);
  }

  deletePalette(req, res) {
    const id = Number(req.params.id);

    palettesService.deletePalette(id);

    res.sendStatus(204);
  }
}

export default PaletteControllers;
//são os responsáveis por lidar com o request e a response
