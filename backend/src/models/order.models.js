import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    restauarnt:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    items:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Item"
        }
    ],
    amount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        enum:[pending,delivered],
        default:"pending"
    }
},{timestamps:true})

export const Order = mongoose.model("Order",orderSchema)