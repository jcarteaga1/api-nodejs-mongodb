const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  name:{type: String, lowercase: true, required: true},
  lastname:{type: String, requerid: true},
  address:{type: String, required:true},
  password:{type: String, required:true},
  email:{type: String, unique: true, required:true}
},
{
timestamps: true
})

module.exports = mongoose.model("User", UsersSchema);
