const mongoose = require("mongoose");
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const HotelsSchema = new Schema({
  apiKey:{type: ObjectId, required: true},
  name:{type: String, lowercase: true},
  address:{type: String, unique: true},
  state:{type: String},
  phone:{type: Number},
  email:{type: String, unique: true},
  website:{type: String, unique: true},
  type:{type: String},
  roomsTotal:{type: Number},
  roomsReservadas:{type: Number},
  roomsDisponibles:{type: Number},
  stateHotel:{type: String}
},
{
timestamps: true
})

HotelsSchema.pre('save', function(next){
  if (this.roomsTotal >50 && this.roomsTotal < 101) {
    this.type = "mediano";
  }
  if (this.roomsTotal > 9 && this.roomsTotal < 50) {
    this.type = "pequeño";
  }
  if(this.roomsTotal > 100){
    this.type = "grande";
  }
  this.stateHotel ="disponible"
  this.roomsReservadas = 0;
  this.roomsDisponibles = this.roomsTotal;
  next();
});
module.exports = mongoose.model("Hotel", HotelsSchema);
