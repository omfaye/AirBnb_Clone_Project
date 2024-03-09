const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema } = require("./Schema.js");

module.exports.LoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in to create a list!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.validatelisting = (req, res, next)=>{
    let {error} = listingSchema.validate(req.body);
    
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

module.exports.isOwner = async(req, res, next)=>{
    let { id } = req.params;
    console.log(id,req.params.id);
    let listing =await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You dont have permission");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
module.exports.validateReview = (req, res, next) => {
    console.log("Request Body:", req.body);
    console.log("Listing ID:", req.params.id);

    if (req.method === 'DELETE') {
        // Skip validation for DELETE requests
        return next();
    }

    let { error, value } = reviewSchema.validate(req.body);
    console.log("Error", error);
    console.log("Value", value);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        console.log(errMsg);
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}


module.exports.isReviwAuthor = async(req, res, next)=>{
    let { id,reviewId } = req.params;
    console.log(id,req.params.id);
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You dont have permission to delete this user");
        return res.redirect(`/listings/${id}`);
    }
    next();
}