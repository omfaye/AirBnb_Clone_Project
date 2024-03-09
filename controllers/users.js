const User = require("../models/user");

module.exports.signUp = async(req,res,next)=>{
    try{
    let {username,email,password} = req.body;
    const newUser = new User({
        email,username
    });
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(error)=>{
        if(error){
            return next(error);
        }
        req.flash("success","Welcome to the Wanderlust");
        res.redirect("/listings");
    });    
}catch(e){
    req.flash("error",e.message);
    res.redirect("/signup");
}
};

module.exports.loginForm = (req,res)=>{
    console.log(req.body);
    res.render("./users/login.ejs");
};
module.exports.Login = async(req,res)=>{
    console.log(req.body);
    req.flash("success","Welcome back to wanderlust !");
    let redirectUrl = res.locals.redirectUrl || "/listings" ;
    res.redirect(redirectUrl);
};
module.exports.logOut = (req,res,next)=>{
    req.logout((error)=>{
        if(error){
            return next(error);
        }
        req.flash("success","You are now logged out!");
        res.redirect("/listings");
    });
};