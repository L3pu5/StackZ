import mongoose from 'mongoose';
import { db } from '../db/db.js';
import crypto from 'crypto';

const { Schema } = mongoose;

const userSchema = new Schema({
    name: {type: String, unique: true, required: true},
    hash: {type: String, required: true},
    salt: {type: String, required: true},
    decks: [Schema.Types.ObjectId],
})

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};

userSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
    console.log(hash);
    return this.hash === hash;
};

export const User = mongoose.model('User', userSchema);