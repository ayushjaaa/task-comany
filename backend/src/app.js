import express from "express"
import dotenv from 'dotenv'
import ComanyRoutes from "../routes/ComapyRoutes.js";
import ReviewsRoute from "./routes/ReviewsRoutes.js"
const app = express()
dotenv.config();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 



app.use('/api/company' ,(req, res, next) => {
    console.log("/login request hit");
    next();
  },ComanyRoutes)



app.use("/api/reviews",(req,res,next)=>{
    console.log('/review hit')
    next()
},ReviewsRoute)
export default app