import 'dotenv/config';
import app from './app.js';
import { connectToDatabase } from './database/index.js';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connectToDatabase();
  console.log(`Application is listening on http://localhost:${port}`);
});
