import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export const messagesModel = mongoose.model('Carts', messagesModel)