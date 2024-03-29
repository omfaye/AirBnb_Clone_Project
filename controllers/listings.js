const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN; 

const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index = async (req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}

module.exports.newRenderForm = async (req,res)=>{
    res.render("listings/new.ejs");
}

module.exports.showRoute = async (req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");

    if(!listing){
        req.flash("error", "Listing does not exist");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", { listing });

}

module.exports.editRoute = async (req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing does not exist");
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/w_250")
    res.render("listings/edit.ejs", { listing,originalImageUrl });
}

module.exports.updateRoute = async (req,res)=>{

    let { id } = req.params;
    console.log(id,req.params.id);

    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;

    listing.image = {url,filename};
    await listing.save();
    }

    req.flash("success","Update Successfully");
    res.redirect("/listings");
}
module.exports.deleteRoute = async (req,res)=>{
    let { id } = req.params;
    let deletedlisting = await Listing.findByIdAndDelete(id);
    req.flash("success","Deleted Successfully");
    console.log(deletedlisting);
    res.redirect("/listings");
}
module.exports.createRoute = async (req,res)=>{

    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
      })
    .send()
    console.log(response);

    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url,"...",filename);
    let listing = req.body.listing;

    const newListing = new Listing(listing);
    console.log(newListing);

    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    const savedListing = await newListing.save();
    
    console.log(savedListing);
    req.flash("success", "New Listing Created Successfully");
    res.redirect("/listings");

};

// listingController.js

module.exports.searchRoute = async (req, res) => {
    try {
        const searchQuery = req.query.q;

        // Modify the Mongoose query to filter listings based on the location or country
        const listings = await Listing.find({
            $or: [
                { location: { $regex: new RegExp(searchQuery, 'i') } },
                { country: { $regex: new RegExp(searchQuery, 'i') } }
            ]
        });

        // Render the search.ejs template with the filtered listings
        res.render("listings/search.ejs", { listings, searchQuery });
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
};
