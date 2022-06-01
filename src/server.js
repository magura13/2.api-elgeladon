import app from './app';
import { connectToDatabase } from './database';

const port = 3000; //porta para o servidor

app.listen(port, () => {
  connectToDatabase();
  console.log(`Application is listening on http://localhost:${port}`);
});

//prática de fábrica API para n0,
