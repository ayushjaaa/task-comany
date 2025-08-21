import express from "express"
import {addComanyReviewController} from "../Controller/ComanyReview.js"
import {RewiesVelidation} from '../../Middleware/ExpressMiddleware.js'
const ReviewsRoute = express.Router()



ReviewsRoute.post("/:companyId/Reviews",RewiesVelidation,addComanyReviewController)

export default ReviewsRoute