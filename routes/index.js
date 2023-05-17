import express from "express";
import User from './userRoute.js';
import Flat from './flatRoute.js';
import Contact from './contactRoute.js';

const app = express();

app.use('/user', User);
app.use('/flat', Flat);
app.use('/contact', Contact);

export default app;