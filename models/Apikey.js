const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApiKeySchema = new Schema({
  keyname: {type: String, required: true},
  keycompany:{type: String, required: true},
  keyemail:{type: String, required: true}
},
{
timestamps: true
});

module.exports = mongoose.model("Apikey", ApiKeySchema);
