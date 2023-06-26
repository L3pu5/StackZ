import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, minlength: 6, required: true},
    decks: [Schema.Types.ObjectId],
})

export const  User = mongoose.model('User', userSchema);
