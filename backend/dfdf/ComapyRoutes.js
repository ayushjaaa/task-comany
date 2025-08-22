import express from "express";
import { addComanyController,allcompany,getSingkeCOmanydetails } from "../src/Controller/ComapanyController.js";
import {ComapnyVeidation} from '../Middleware/ExpressMiddleware.js'
const ComanyRoutes = express.Router();
ComanyRoutes.post(
  "/addcompany",ComapnyVeidation,
  addComanyController
);

ComanyRoutes.get(
  "/allcompany",allcompany
);

ComanyRoutes.get("/:companyId",getSingkeCOmanydetails);

export default ComanyRoutes;
