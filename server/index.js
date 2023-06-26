import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Load the .env environment.
dotenv.config();
//CONSTANTS
const CONNECTION_URL = process.env.MONGO_DB_CONNECTIONSTRING;
const PORT = 5000;
//Start the app;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//Connect to Mongodb
const db = mongoose.connect(CONNECTION_URL);

//
import { GetUsers } from './api/users.js';

app.get('/', GetUsers);

app.post('/login', (req, res) => {
    console.log(req.body);
    res.status(201).json("{login: 'true'}");
});

app.get('/test', (req, res) => {
    res.status(201).json("{huge: 'success'}");
});

app.get('/asd', (req, res) => {
    res.status(404).send("Not found.");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
