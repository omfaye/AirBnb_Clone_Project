const express = require('express');
const router = express.Router({ mergeParams:true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../Schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { LoggedIn,validateReview, isReviwAuthor } = require('../middleware.js');
const reviewController = require("../controllers/reviews");
//review route
router.post("/" ,validateReview,LoggedIn,wrapAsync(reviewController.addReview));

//review delete routes
router.delete("/:reviewId" ,validateReview,LoggedIn,isReviwAuthor,wrapAsync(reviewController.deleteReview));

module.exports = router; 