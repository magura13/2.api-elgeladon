import { Router } from 'express';
//importando o router direto de dentro do express.
//o Router é uma classe precisará ser instânciado
import PaletteControllers from '../controllers/palettes.controllers.js';
import verifyIdPaletteMiddleware from '../middlewares/verifyIdPalette.middleware.js';
import verifyInfosPalettesMiddleware from '../middlewares/verifyInfosPalettes.middlewares.js';

const palettesControllers = new PaletteControllers(); //instânciado o palette controllers, tendo assim acesso aos métodos
const palettesRouter = Router();
//instânciado

palettesRouter.get('/getAllPalettes', palettesControllers.getAllPalettes); //a minha rota /palettes/getAllPalettes está instânciada no palettesControllers chama o método getAllPalettes dentro da classe executa me retorna o res

palettesRouter.get(
  '/getByIdPalettes/:id',
  verifyIdPaletteMiddleware,
  palettesControllers.getByIdPalettes,
); //repetindo o processo anterior porém indo e chamando no meu controller o getByIdPalettes

palettesRouter.post('/createNewPalette', verifyInfosPalettesMiddleware, palettesControllers.createNewPalette); //chamando no meu controller a função createNewPalette//!Atenção ao método .post estou postando criando uma nova paleta

palettesRouter.put(
  '/updatePalette/:id',
  verifyIdPaletteMiddleware,verifyInfosPalettesMiddleware,
  palettesControllers.updatePalette,
); //!Atenção ao método put
//O método de requisição HTTP PUT cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados.

palettesRouter.delete(
  '/deletePalette/:id',
  verifyIdPaletteMiddleware,
  palettesControllers.deletePalette,
); //!Atenção ao método delete

export default palettesRouter;
//os router as rotas são as portas de entrada, os caminhos
