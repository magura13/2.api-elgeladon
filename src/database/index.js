import mongoose from 'mongoose';

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('MongoDB connection established');
    })
    .catch((err) => {
      console.log(`Error connecting to MongoDB: ${err}`);
    });
};
