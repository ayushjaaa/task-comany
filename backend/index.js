import app from "./src/app.js"
import connect from "./src/db/db.js"
import dotenv from "dotenv"
connect()


const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is runing on ${PORT}`)
})