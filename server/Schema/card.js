import mongoose from 'mongoose';
const { Schema } = mongoose;

const cardSchema = new Schema({
    face1: String,
    face2: String,
})

export default Card = mongoose.model('Card', cardSchema);
