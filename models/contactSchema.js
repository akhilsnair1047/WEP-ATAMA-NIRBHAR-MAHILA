var mongoose = require("mongoose");
var ContactSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Subject : String,
    MobileNumber : String,
    Message : String
})
module.exports = mongoose.model("contacts", ContactSchema);