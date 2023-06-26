import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
//Load the .env environment.
dotenv.config();
//CONSTANTS
const CONNECTION_URL = process.env.MONGO_DB_CONNECTIONSTRING;
const PORT = 5000;
//Start the app;
const app = express();
//Connect to Mongodb
const db = mongoose.connect(CONNECTION_URL);

//
import { GetUsers } from './api/users.js';

app.get('/', GetUsers);

app.get('/test', (req, res) => {
    res.status(201).json("{huge: 'success'}");
});

app.get('/asd', (req, res) => {
    res.status(404).send("Not found.");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
