if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
// const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust"; 
const dbUrl = process.env.ATLAS_DB; 
const ejsMate = require("ejs-mate");
const session = require("express-session");

const MongoStore = require('connect-mongo');
const flash = require("connect-flash");

const ExpressError = require("./utils/ExpressError.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const listingsRouter = require("./routes/listing.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret: process.env.SECRET
    },
    touchAfter:24*3600,
})

store.on("error",()=>{
    console.log("error occured",error);
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 1000,
    },
    httpOnly: true,  //security prevention
};



app.use(session(sessionOptions));
app.use(flash());  //routes ke pehle install this session

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());      //user related info save krna
passport.deserializeUser(User.deserializeUser());   //user related info delete/remove krna


main().then(()=>{
    console.log("Connected to DB");
    
}).catch(()=>{
    console.log(err);
})

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    console.log(req.flash("success"));
    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeuser = new User({
//         email: "studenta@gmail.com",
//         username:"delta-studen"
//     });
//     let registeredUser = await User.register(fakeuser,"helloworld"); // static method register(user,password)
//     res.send(registeredUser);
// })

app.use("/listings" , listingsRouter );
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/",userRouter);

async function main(){
    await mongoose.connect(dbUrl);
}

// app.get("/",(req,res) =>{
//     res.send("I am Om and I Start My Project");
// })

app.all("*",(req,res,next)=>{
    console.log("Request Body:", req.body);
    console.log("Listing ID:", req.params.id);
    next(new ExpressError(404,"Page Not Found !"));
});

app.use((err,req,res,next)=>{
    let {statusCode = 500,message = "something went wrong !"} = err;
    res.status(statusCode).send(message);

})

app.listen(8080,(req,res) =>{
    console.log("The server is listening on port 8080");    
});

