import Flat from '../model/flatSchema.js';
import { ObjectId } from 'mongodb';

const getFlat = async (req, res) => {
try {
    const data = await Flat.find({property: req.params.type});
    res.send({
        statusCode: 200,
        data: data
    })
} catch (error) {    
    console.log(error);
}
}
const getFlatByOwner = async (req, res) => {
try {
    const params = req.param("email");
    const data = await Flat.find({email:params});
    if(data.length > 0) res.send({
        statusCode: 200,
        data: data
    })
    else {
        res.send({
            statusCode: 400,
        })
    }
} catch (error) {    
    console.log(error);
}
}
const createFlat = async (req, res) => {
    const data = req.body;
try {
    Flat.create(data);
    res.send({
        statusCode: 200,
        data: data
    })
} catch (error) {    
    console.log(error);
}
}
const updateFlat = async (req, res) => {
try {
    await Flat.findByIdAndUpdate({_id: new ObjectId(req.params.id)}, req.body);
    res.send({
        statusCode: 200
    })
} catch (error) {    
    console.log(error);
}
}
const deleteFlat = async (req, res) => {
try {
    await Flat.findByIdAndDelete({_id: new ObjectId(req.params.id)});
    res.send({
        statusCode: 200
    })
} catch (error) {    
    console.log(error);
}
}


export default {
    getFlat,
    getFlatByOwner,
    createFlat,
    updateFlat,
    deleteFlat
}