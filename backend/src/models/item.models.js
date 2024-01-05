import mongoose, { mongo } from 'mongoose'

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    review:{
        type:Number,
        default:0
    }
},{timestamps:true})

export const Item = mongoose.model("Item",itemSchema)