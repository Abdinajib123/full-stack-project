import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()


const connectdb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connected seccessfuly')
    } catch (error) {
        console.log(error)
    }
}

export default connectdb