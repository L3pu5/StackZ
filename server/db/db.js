import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//CONSTANTS
const CONNECTION_URL = process.env.MONGO_DB_CONNECTIONSTRING;
//Connect to Mongodb
export const db = mongoose.connect(CONNECTION_URL);