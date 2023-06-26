import mongoose from 'mongoose';
const { Schema } = mongoose;

const deckSchema = new Schema({
    name: String,
    cards: Number,
})

export default Deck = mongoose.model('Deck', deckSchema);
