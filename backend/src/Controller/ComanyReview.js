import Review from "../Model/Reviews.js";
import Comany from "../Model/Comany.js";
import { validationResult } from "express-validator";
export const addComanyReviewController = async(req,res)=>{
    console.log('dfhssf')
try{

    const erro = validationResult(req)
    if(!erro.isEmpty()){
        return res.status(400).json({error:erro.array()})
    }

    if(!req.body){
        return res.status(400).json({error:"req body is undefind"})
    }
    if(!req.params.companyId){
        return res.status(400).json({error:"comany id is required"})
    }

const ComanyId = req.params.companyId
const {ReviewerName,subject,reviewtext,ratings} = req.body

    if (
        !ReviewerName ||
        !subject ||
        !reviewtext ||
        !ratings ||
        !ComanyId
      ) {
        console.log("kuch to husa");
        return res.status(400).json({ error: "Missing required field" });
      }

    const CompanyExist = await Comany.findById(ComanyId)
    if(!CompanyExist){
        return res.status(400).json({error:"commpany doest exist"})
    }


    const newReviewes = await Review.create({
        ReviewerName,
        subject,
        reviewtext,
        ratings,
        ComanyId
    })

const UpdatedComany = await Comany.findByIdAndUpdate(
    ComanyId,{$push:{ReviwsId:newReviewes._id}}
)
if(!UpdatedComany){
    return res.status(400).json({error:"comnay reating cant be updated"})
}
res.status(200).json({daa:UpdatedComany})
}
catch(error){
    console.log(error)
    return res.send(error)
}

}