import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    },
});

export default mongoose.model('File', fileSchema);