import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from 'mongodb'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const MongoURL = 'mongodb://127.0.0.1:27017';

async function createConnection (){
    const client = new MongoClient(MongoURL);
    await client.connect();
    console.log("connected MDB")
return client;
}



app.get('/api/login', async (req, res) => {
    const client = await createConnection();
    const data = req.body;
    const data123 = await client.db('real_estate').collection('users').findOne({email:data?.email})
    res.send(data123)
})


app.post('/api/register', async (req, res) => {
    const client = await createConnection();
    const data123 = req.body
    const data = await client.db('real_estate').collection('users').insertOne(data123)
    res.send(data)
})


app.listen(5000, () => {
    console.log("Server Started in", 5000);
  });
  