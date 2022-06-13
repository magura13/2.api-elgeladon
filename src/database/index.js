import mongoose from 'mongoose';

const { connect } = mongoose;

export const connectToDatabase = () => {
  connect('mongodb+srv://tiagolelis:101010@cluster0.gnh5y.mongodb.net/elgeladon_db?retryWrites=true&w=majority', {
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
