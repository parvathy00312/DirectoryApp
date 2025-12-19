var mongoose = require("mongoose");

const Schema = mongoose.Schema({
 name:String,
 place:String,
 age:Number,
 phone:String,
});
module.exports = mongoose.model("person",Schema);