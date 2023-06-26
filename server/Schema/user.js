import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    password: String,
    decks: [Schema.Types.ObjectId],
})

export const  User = mongoose.model('User', userSchema);
