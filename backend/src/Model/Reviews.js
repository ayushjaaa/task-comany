import mongoose from "mongoose";
const ReviewsSchmea = mongoose.Schema({
    ComanyId:[
        {type:mongoose.Schema.Types.ObjectId,ref:"Comany"}
    ]
,

    ReviewerName:{
        type:String,
        required:[true,"ReviewerName is Required"],
        maxLength:[20,"ReviewrName is cant be more then 20 Character"],
        minLength:[4,"ReviewrName is cant be less than 4 Character"]
    },
    subject:{
        type:String,
        required:[true,"subject is Required"],
        maxLength:[20,"subject cant be more than 20 Character"],
        minLength:[4,"subject is cant be less than 4 Character"]

    },
    reviewtext:{
        type:String,
        required:[true,"ReviewerName is Required"],
        maxLength:[200,"ReviewrName is cant be more then 20 Character"],
        minLength:[4,"ReviewrName is cant be less than 4 Character"]
        
    },
    ratings:{
        type:Number,
        required:[true,"ReviewerName is Required"],
        min: [1, "Rating must be at least 1"], 
        max: [5, "Rating cannot be more than 5"] 
    },


})

const Review  =  mongoose.model("Review",ReviewsSchmea)
export default Review



// ComanyId,ReviewerName,subject,reviewtext,ratings