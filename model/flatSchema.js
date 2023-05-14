import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const flatSchema = new Schema({
    location : {
        type: String,
    },
    size : {
        type: String,
    },
    price : {
        type: String,
    },
    negotiable : {
        type: String,
    },
    age : {
        type: String,
    },
    type : {
        type: String,
    },
    advance : {
        type: String,
    },
    rent : {
        type: String,
    },
    pet : {
        type: String,
    },
    bhk : {
        type: String,
    },
    parking : {
        type: String,
    },
    description : {
        type: String,
    },
    property : {
        type: String,
    },
    email : {
        type: String,       
    },
});

export default mongoose.model('flat', flatSchema);