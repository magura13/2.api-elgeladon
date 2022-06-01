import mongoose from 'mongoose';

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect('mongodb://localhost:27017/elgeladon-db', {
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
