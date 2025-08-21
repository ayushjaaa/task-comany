import mongoose from "mongoose";
const  comanySchema = new mongoose.Schema({
ReviwsId:[{type:mongoose.Schema.Types.ObjectId,ref:'Review'}],

    CompanyName:{
        type:String,
        required:[true,"CompanyName is required"],
        unique:true,
        minLength:[3,"CompanyName can not be less then 2 Character"],
        maxLength:[15,"CompanyName can not be mosre then 15 Character"]

    },
    location:{
        type:String,
        required:[true," location is required"],
        minLength:[3,"location can not be less then 2 Character"],
        maxLength:[15,"location can not be less then 2 Character"],
    },
    foundedOn:{
        type:Date,
        required:[true," foundedOn is required"],
        validation:{
            validation:(value)=>value < new Date(),
            message:"the  date can not be in the future"
        },
      },  city:{
        type:String,
        required:[true," city is required"],
        index:true
    },
    logo:{
        type:String,
     default: "https://via.placeholder.com/150",
    },
    description:{
        type:String,
        trim:true

    }


},{timestamps:true})


const Comany = mongoose.model("Comany",comanySchema)
export default Comany


// CompanyName,location,foundedOn,city,logo,description