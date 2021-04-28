const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectCallback = () => { 
    console.log("Connecting... ⏰")    
    return {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

const connectDB = () => {
    mongoose.connect(db, connectCallback())
        .then(function () { 
            console.log("MongoDB connected 🍃");
        })
        .catch(function (err) { 
            console.log(err.message);
            process.exit(1);
        })
}


module.exports = connectDB;