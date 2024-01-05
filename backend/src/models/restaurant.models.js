import mongoose from 'mongoose'

const restaurantSchema = new mongoose.Schema({
    resname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    cuisine:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    deliveryTime:{
        type:Number,
        required:true
    },
    avgRating:{
        type:Number,
    },
    costForTwo:{
        type:Number,
        required:true
    },
    menu:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Item"
        }
    ],
    orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Order"
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ]
},{timestamps:true})

export const Restaurant = mongoose.model("Restaurant",restaurantSchema)