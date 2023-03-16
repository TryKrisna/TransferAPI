// const mongoose = require('mongoose')
import mongoose from 'mongoose';
const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }
})
// module.exports = mongoose.model('Alien',alienSchema)
export default mongoose.model('Alien',alienSchema)