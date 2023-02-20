import mongoose from "mongoose";

const cartsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export const cartsModel = mongoose.model('Carts', cartsSchema)