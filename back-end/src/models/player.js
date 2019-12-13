import mongoose from 'mongoose';

const Player = mongoose.Schema({
    name: String,
    score: Number,
});

export default mongoose.model('Player', Player);