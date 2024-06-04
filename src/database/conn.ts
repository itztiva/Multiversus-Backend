import mongoose from "mongoose";
import { config } from "..";

mongoose.set('strictQuery', false);
mongoose.connect(config.DB_URL);

mongoose.connection.on('connected', () => {
    console.log('Connected to Database.');
  
});

mongoose.connection.on('error', (error) => {
  console.error('Database connection error:', error);
});