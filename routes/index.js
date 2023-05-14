import express from "express";
import User from './userRoute.js';
import Flat from './flatRoute.js';

const app = express();

app.use('/user', User);
app.use('/flat', Flat);

export default app;