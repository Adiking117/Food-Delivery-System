import mongoose, { mongo } from 'mongoose'

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    restaurant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    },
    item:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Item"
    },
},{timestamps:true})

export const Review = mongoose.model("Review",reviewSchema)