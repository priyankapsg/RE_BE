import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';
const { Schema } = mongoose;

const mySchema = new Schema({
        usertype : String,
        username : String,
        email : String,
        mobile : String,
        password : String
  });
  
  // Create a Mongoose model for your collection
  const MyModel = mongoose.model('users', mySchema);


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



app.post('/api/login', async (req, res) => {
    const client = await createConnection();
    const data = req.body;
    const result = await client.db('real_estate').collection('users').findOne({email:data?.email.toLowerCase()})
    if(result === null){
        res.send({
            statusCode: 400
        })
    } 
    else {
        const result = await client.db('real_estate').collection('users').findOne({
            email:data?.email.toLowerCase(),
            password:data?.password}
            )
            if(result === null){
                res.send({
                    statusCode: 201
                })  
            }
            else {
                res.send({
                    statusCode: 200,
                    user: result
                })  
            }
    }
})


app.post('/api/register', async (req, res) => {
    const client = await createConnection();
    const data123 = req.body
    const result = await client.db('real_estate').collection('users').findOne({email:data123?.email.toLowerCase()})
    if(result?.email.length > 0){
        res.send({
            statusCode: 400
        })
    } else {
        const data = await client.db('real_estate').collection('users').insertOne(data123)
        res.send({
            data: data,
            statusCode: 200
        })
    } 
})

app.post('/api/flat', async (req, res) => {
    const client = await createConnection();
    const data123 = req.body
    const data = await client.db('real_estate').collection('flat').insertOne(data123)
    res.send(data)
})

app.get(`/api/flats/:type`, async (req, res) => {
    const client = await createConnection();
    const params = req.param("type");
    const data = await client.db('real_estate').collection('flat').find({property:params}).toArray();
    res.send(data)
})

app.get('/api/flat/:type', async (req, res) => {
    const client = await createConnection();
    const params = req.param("type");
    const data = await client.db('real_estate').collection('flat').find({email:params}).toArray();
    if(data.length > 0) res.send({
        statusCode: 200,
        data: data
    })
    else {
        res.send({
            statusCode: 400,
        })
    }
})


app.listen(5000, () => {
    console.log("Server Started in", 5000);
  });