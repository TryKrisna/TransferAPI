import mongoose from 'mongoose';
const documentSchema = new mongoose.Schema({

    uuid: {
        type: String,
        required: true
    },
    data: {
        type: Object,
        required: true
    },
    isIssus:{
        type: Boolean,
        required: true,
        default: false
    }
    
})

export default mongoose.model('Document',documentSchema)