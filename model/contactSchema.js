import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    ownerEmail : {
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    mobile : {
        type: String,
        required: true
    },
    flat_id : {
        type: Schema.Types.ObjectId,
        required: true
    }
});

export default mongoose.model('Contact', contactSchema);