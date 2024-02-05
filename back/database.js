import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const DB_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.npe2bti.${process.env.DATABASE}?retryWrites=true&w=majority`;

    await mongoose.connect(DB_URI);
    console.log('Conected to MongoDB');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;