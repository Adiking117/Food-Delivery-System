import mongoose, { mongo } from 'mongoose'

const cartSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Item"
        }
    ],
    totalPrice:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const Cart = mongoose.model("Cart",cartSchema)