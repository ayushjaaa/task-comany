import Comany from "../Model/Comany.js";
import { validationResult } from "express-validator";
export const addComanyController = async (req, res) => {
  try {
    if(!req.body){
        return res.status(400).json({error:"req body is undefind"})
    }

    const errorExpresValidator = validationResult(req);
    if (!errorExpresValidator.isEmpty()) {
      return res.status(400).json({ errors: errorExpresValidator.array() });
    }

    const { CompanyName, location, foundedOn, city, logo, description } =
      req.body;

    const existing = await Comany.findOne({ CompanyName });
    if (existing) {
      return res.status(400).json({ error: "compamy alerady exits" });
    }
    if (
      !CompanyName ||
      !location ||
      !foundedOn ||
      !city ||
      !logo ||
      !description
    ) {
      console.log("kuch to husa");
      return res.status(400).json({ error: "Missing required field" });
    }

    const newComapny = await Comany.create({
      CompanyName,
      location,
      foundedOn,
      city,
      logo,
      description,
    });
    console.log(newComapny);
    res.status(200).json({ message:"rating added succefully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "interna server errro" });
  }
};

export const allcompany = async (req, res) => {
  try {
    const comnay = await Comany.find();
    res.status(200).json({ allcompany: comnay });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};



export const getSingkeCOmanydetails = async (req, res) => {
  try {
    const id = req.params.companyId;
    if (!id) {
      res.status(400).json({ error: "id is required" });
    }
    const comany = await Comany.findById({
      _id: id,
    }).populate("ReviwsId");
console.log(comany)

    if (!comany) {
      return res
        .status(400)
        .json({ error: "comay doesnt exist with these id" });
    }

    return res.status(200).json({ ComanyDetils: comany });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
