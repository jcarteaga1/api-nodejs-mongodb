const reserva = require("../models/Reservas");
const hotel = require("../models/Hotels");
const hotel1 = require("../models/Hotels");
const hotel3 = require("../models/Hotels");
const user = require("../models/Users");


exports.inicio=(req, res) =>{
  res.send('HOLA MUNDO');
};

exports.crearReserva=(req, res)=>{
  hotel.findById(req.body.idHotel, (err, hotel) =>{
    if(err){
      res.status(500).send({message: 'No existe ningun hotel con esa identificacion'});
    }
    if(hotel.roomsDisponibles < req.body.nRooms){
      res.status(500).send({message: 'El hotel no tiene esa cantidad de rooms disponibles'});
    }else{
        user.findById(req.body.idUsuario, (err, user) =>{
          if(err){
            res.status(500).send({message: 'No existe ningun usuario con esa identificacion'})
          }
          if(user.password != req.body.passwordUsuario){
            res.status(600).send({message: 'Clave de usuario incorrecta'})
          }else{
            hotel1.findOneAndUpdate(req.body.idHotel,{roomsDisponibles: (hotel.roomsDisponibles - req.body.nRooms), roomsReservadas: (parseInt(req.body.nRooms) + parseInt(hotel.roomsReservadas))},{new:true},(err,HotelStored)=>{
              if(err){
                res.status(500).send({message: 'error al actualizar rooms'})
              }else{
                let Reserva = new reserva(req.body);
                Reserva.save((err, ReservaStored)=>{
                  if(err){
                    res.status(500).send({message: 'error al guardar la reserva'})
                  }
                  if(hotel.roomsDisponibles != req.body.nRooms){
                      res.json({message: 'reserva exitosa', ReservaStored})
                    }else{
                     hotel3.findOneAndUpdate(req.body.idHotel,{stateHotel: "FULL"},{new: true},(err,ReservaStored)=>{
                       if(err){
                         res.status(500).send({message: 'error al actualizar estado'})
                       }else{
                          res.json({message: 'reserva exitosa', ReservaStored})
                       }
                     });
                    }
                })
              }
            })
          }
        })
    }
  })
};
