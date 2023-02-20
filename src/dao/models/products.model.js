import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

export const productsModel = mongoose.model('Carts', productsSchema
 )