const express = require('express');
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../Schema.js");
const Listing = require("../models/listing.js");
const {LoggedIn,isOwner,validatelisting} = require("../middleware.js");
// const {isOwner} = require("../middleware.js");
const listingController = require("../controllers/listings.js")

const multer  = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

//search route
router.get("/search",wrapAsync (listingController.searchRoute));


router
    .route("/")
    .get(validatelisting, wrapAsync (listingController.index))    //index route
    .post(validatelisting,LoggedIn,upload.single('listing[image]'),wrapAsync(listingController.createRoute)); //post route || create rouutr
    

 //create new listing route 
router.get("/new",LoggedIn,wrapAsync (listingController.newRenderForm));

router
.route("/:id")
.get( wrapAsync (listingController.showRoute)) //show route
.put(validatelisting,LoggedIn,isOwner,upload.single('listing[image]'),wrapAsync(listingController.updateRoute)) //update route
.delete(validatelisting,LoggedIn,isOwner,wrapAsync (listingController.deleteRoute)); //delete route

//edit route
router.get("/:id/edit",validatelisting,LoggedIn,isOwner,wrapAsync(listingController.editRoute));


module.exports = router;