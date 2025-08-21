import mongoose from "mongoose";
import dotenv from 'dotenv'
export const connect = async()=>{
 try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to db")
 }catch(error){
    console.log(error)
    console.log('not connected to db')
 }
}
export default connect