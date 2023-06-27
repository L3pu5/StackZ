import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import cookieParser from 'cookie-parser';
import cors from 'cors';

const PORT = 5000;

//Load the .env environment.
dotenv.config();
//Start the app;
const app = express();
app.set('trust proxy', 1);

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  }));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

const THREE_HOURS = 1000*60*3;

app.use(session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({mongoUrl: process.env.MONGO_DB_SESSION_CONNECTIONSTRING}),
    saveUninitialized: false,
    cookie: {
        maxAge: THREE_HOURS,
        secure: false,
        httpOnly: true,
        sameSite: false,
    },
    resave: false,
}))


//
import { GetUsers } from './api/users.js';
import { NewUser } from './api/signup.js';
import { LoginAsUser } from './api/login.js';
import { LogoutAsUser } from './api/logout.js';

app.get('/', GetUsers);

app.post('/signup', NewUser);
app.post('/login', LoginAsUser);
app.post('/logout', LogoutAsUser);

app.get('/test', (req, res) => {
    res.status(201).json("{huge: 'success'}");
});

app.get('/asd', (req, res) => {
    res.status(404).send("Not found.");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
