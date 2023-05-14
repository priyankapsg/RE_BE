import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db.js';
import appRoutes from './routes/index.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/app", appRoutes);

app.get('/', (req, res) => {
  res.send('API is working');
})

app.listen(5000, () => {
    console.log("Server Started in", 5000);
  });