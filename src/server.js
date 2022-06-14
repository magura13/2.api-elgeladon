import 'dotenv/config';
import app from './app';
import { connectToDatabase } from './database';

const port = process.env.PORT || 8080;

app.listen(port, () => {
  connectToDatabase();
  console.log(`Application is listening on http://localhost:${port}`);
});
