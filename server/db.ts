import mongoose from 'mongoose';
import { config, MONGO_LOCAL } from './src/configs/config';
const { MONGO_URI } = config;

mongoose.connection
  .on('open', () => console.log('Conneced with database'))
  .on('error', (error: Error) => {
    console.log(error);
  });

export async function connectToDatabase() {
  const _url_ = process.env.APP_ENV === 'dev' ? MONGO_LOCAL.url1 : MONGO_URI;
  // await mongoose.connect(_url_);
  await mongoose.connect(MONGO_LOCAL.url1);
}

export async function disconnectFromDatabase() {
  await mongoose.disconnect();
}