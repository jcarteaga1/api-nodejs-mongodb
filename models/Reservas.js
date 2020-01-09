const mongoose = require("mongoose");
const Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

const ReservasSchema = new Schema({
  idUsuario:{type: ObjectId, required: true},
  passwordUsuario:{type: String, requerid: true},
  idHotel:{type: ObjectId, required:true},
  fechaComienzo:{type: Date, required:true},
  fechaFin:{type: Date, required:true},
  nRooms:{type: Number, required: true}
},
{
timestamps: true
})

ReservasSchema.pre('validate', function(next){
  if (this.fechaComienzo> this.fechaFin) {
    this.invalidate('startDate', 'Start date must be less than end date');
  }
  next();
});
module.exports = mongoose.model("Reserva", ReservasSchema);
