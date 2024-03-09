const mongoose = require('mongoose');
const initData = require('./data.js');
const Listing = require("../models/listing.js");

const Mongo_url = "mongodb://127.0.0.1:27017/wanderlust";  

main().then(()=>{
    console.log("Connected to DB");
}).catch(()=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(Mongo_url);
}

const initDB = async ()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({
        ...obj,
        owner:'65e09859ca7a361b6ae2b89e',
    })); 
    await Listing.insertMany(initData.data);
    console.log("Data was Initialize");
}
initDB();
