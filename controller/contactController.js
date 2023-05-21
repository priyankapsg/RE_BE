import Contact from '../model/contactSchema.js';
import Flat from '../model/flatSchema.js';
import User from '../model/userSchema.js';
import mongoose from 'mongoose';

const getContact = async (req, res) => {
try {
    const data = await Contact.aggregate([
        {
            $lookup: {
                from: 'flats', 
                localField: 'flat_id',                
                foreignField: '_id',
                as: 'common'
            }
        }
    ])
    res.send({
        statusCode: 200,
        data: data
    })
} catch (error) {    
    console.log(error);
}
}
const createContact = async (req, res) => {
    const data = req.body;
    let result = '';
try {
    await Contact.create(data)
    .then( async (res) => {
      if(res?.name?.length > 0){
    const contact = await User.find({email: res?.ownerEmail})
      result = contact;          
    }  
    })
    res.send({
            statusCode: 200,
            data: result
        })

} catch (error) {    
    console.log(error);
}
}


export default {
    getContact,
    createContact
}