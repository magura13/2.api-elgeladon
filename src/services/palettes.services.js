import Palette from '../models/palettes.model'; //exportando como

//criando como classe somente por opção e forma de trabalho, essa classe vai servir somente para ter os métodos que vão criar a lógica da paleta. Lembrando que os métodos de uma classe são funções
class PalettesServices {
  async getAllPalettes() {
    const palettes = await Palette.find();

    if (palettes.length === 0) {
      throw { status: 404, message: 'No Palettes found!' };
    }

    return palettes;
  }

  async findByIdPalette(id) {
    const chosenPalette = await Palette.findById({ _id: id });
    // const chosenPalette = palettes.find((elem) => elem.id === id); //a função find puxa o elemento pelo id dele e compara se o id que está vindo é igual, pegando assim e declarando a informação na variável chosenPalette

    return chosenPalette;
  }

  async createNewPalette(flavor, description, img, price) {
    //recebe os parãmetros que são as informações passados pelo cliente e cria um novo objeto. Como o nome da chave do objeto é o mesmo do parãmetro que está sendo enviado não existe a necessidade de fazer flavor:flavor,
    const newPalette = {
      flavor,
      description,
      img,
      price,
    };
    try {
      const palette = await Palette.create(newPalette);

      //retorna a newPalette
      return palette;
    } catch (error) {
      throw error;
    }
  }

  async updatePalette({ flavor, description, img, price, id }) {
    //basicamente esse meu método de lógica criado no service está atualizando os dados recebidos pelo req.param e retornando o objeto com valores atualizados
    //esses são os dados que estão vindo atualizado do corpo da requisição
    //é criado o objeto updatedPalette
    const updatedPalette = { flavor, description, img, price };

    try {
      await Palette.updateOne({ _id: id }, updatedPalette);

      const palette = await Palette.findById(id);

      return palette;
    } catch (error) {
      throw error;
    }
  }

  async deletePalette(id) {
    const palette = await Palette.findByIdAndDelete(id);

    return palette;
  }
}

export default PalettesServices;
//exportando por default
//será o cara da lógica que será o responsável por lidar diretamente com o banco de dados, ele quem irá fazer alterações e buscar informações.

//!Atenção como o meu banco de dados no momento é um array estou utilizando lógica para manipulaçoes de arrays, quando meu banco de dados for para um servidor usarei a lógica do mesmo
