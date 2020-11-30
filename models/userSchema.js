var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobileNumber : String,
    whatsappNumber : String,
    emailID : String,
    cityName : String,
    stateName : String,
    idea : String,
    file : 
        { 
            data: Buffer, 
            contentType: String 
        }
})
module.exports = mongoose.model("User", UserSchema);