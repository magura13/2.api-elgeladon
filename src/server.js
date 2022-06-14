import 'dotenv/config';
import app from './app';
import { connectToDatabase } from './database';

app.listen(process.env.PORT, () => {
  connectToDatabase();
  console.log(`Application is listening on http://localhost:${process.env.PORT}`);
});
