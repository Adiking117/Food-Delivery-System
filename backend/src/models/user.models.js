import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String
    },
    wishlist:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Restaurant"
        }
    ],
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
    myOrders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        } 
    ]
},{timestamps:true})

export const User = mongoose.model("User",userSchema)