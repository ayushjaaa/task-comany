import express from "express";
import { addComanyController,allcompany ,getSingkeCOmanydetails} from "../Controller/ComapanyController.js";
import {ComapnyVeidation} from '../../Middleware/ExpressMiddleware.js'
const ComanyRoutes = express.Router();
ComanyRoutes.post(
  "/addcompany",ComapnyVeidation,
  addComanyController
);

ComanyRoutes.get(
  "/allcompany",allcompany
);

ComanyRoutes.get("/:companyId",ComapnyVeidation,getSingkeCOmanydetails);

export default ComanyRoutes;
