import mongoose from 'mongoose';
import 'dotenv/config';


/* const connectionString = 'mongodb://127.0.0.1:27017/coder69900'; */
const connectionString = process.env.MONGO_URL || ''


export const initMongoDB = async() => {
  try {
    await mongoose.connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
}
