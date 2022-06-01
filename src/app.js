import express from 'express'; //importando a biblioteca do express na variável express
import cors from 'cors'; //importando a cors
import palettesRouter from './routes/palettes.routes';

const app = express(); //insânciando o Express

app.use(express.json()); //informando a minha aplicação que sempre deverá se comunicar através do JSON
app.use(cors()); //informando a minha aplicação as configurações cors
app.use('/palettes', palettesRouter);//dessa forma consigo concentrar todas as requisições referentes ao palettes

export default app;
// app.get('/palettes/getAllPalettes', (req, res) => {
//   return res.send(palettes);
// });

// app.get('/palettes/getByIdPalettes/:id', (req, res) => {
  //const {id} = req.params; ambas as linhas 44 e 45 fazem a mesma função, praticada usada para quando são varios elementos
//   const id = Number(req.params.id); //o req traz informações do body
//   const chosenPalette = palettes.find((elem) => {
//     return elem.id === Number(id); //chosen palette vai puxar do array o elemento que tenha o mesmo id que a variável id enviou
//   });

//   if (!chosenPalette) {
//     return res.status(404).send(`Palette not found!`);
//   }//tratativa para caso não encontre palette retornar msg de erro

//   return res.send(chosenPalette); //a chosenPalette é a paleta encontrada dentro do array palettes que tenha o id enviado pelo cliete. O cliente envia o id e eu faço a requisição do id pelo req.param.id;
// });


