import app from './app.js'
import dotenv from 'dotenv'
import connectDB from './db/index.js'

dotenv.config({
    path : './.env'
})

const port = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("Server Running ")
})

connectDB().then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on ${port}`)
    })
}).catch((error)=>{
    console.log("Connection error : ",error)
})