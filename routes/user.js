const express = require('express');
const router = express.Router({ mergeParams:true });
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware.js");
// const {isOwner} = require("../middleware.js");
const usersController = require("../controllers/users");

router.route("/signup")
.get((req,res)=>{
    res.render("users/signup.ejs");})
.post(wrapAsync(usersController.signUp));

router.route("/login")
.get(usersController.loginForm)
.post(saveRedirectUrl,
passport.authenticate("local",{failureRedirect:'/login',failureFlash:true}), usersController.Login);

router.get("/logout",usersController.logOut);

module.exports = router;
