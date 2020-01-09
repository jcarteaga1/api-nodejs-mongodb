const hotel = require("../models/Hotels");
const apikey = require("../models/Apikey");

exports.inicio=(req, res) =>{
  res.send('HOLA MUNDO');
};

exports.crearHotel=(req, res)=>{
apikey.findById(req.body.apiKey, (err, api)=>{
  if(err){
    res.status(500).send({message: 'no existe esta apikey'})
  }else{
    let Hotel = new hotel(req.body);
    Hotel.save((err, HotelStored) =>{
      if(err){
        res.status(500).send(err);
      }
      res.status(200).json({message:"hotel creado exitosamente", HotelStored});
    });
  }
})
};

exports.editarHotel=(req, res)=>{
apikey.findById(req.body.apiKey, (err, apikey)=>{
  if(err){
    res.status(500).send({message: 'no existe esta apikey'})
  }else{
    hotel.findOneAndUpdate(req.body._id, {roomsTotal: req.body.roomsTotal, roomsDisponibles: req.body.roomsTotal,type: req.body.type, phone: req.body.phone, email: req.body.email, website: req.body.website},{new :true},(err,HotelStored)=>{
      if(err){
        res.status(500).send({message: 'error al actualizar hotel'})
      }
      res.status(200).json({message: 'actualizacion de hotel exitosa', HotelStored})
    })
  }
})
}

exports.eliminarHotel=(req,res)=>{
apikey.findById(req.body.apiKey, (err, apikey)=>{
  if(err){
    res.status(500).send({message: 'no puede eliminar porque el apikey es incorrecto o no existe'})
  }else{
    hotel.remove({_id: req.body._id},(err,hotel)=>{
      if(err){
        res.status(500).send({message: 'error al eleminar hotel'})
      }
      res.status(200).json({message: 'hotel eliminado exitosamente'})
    })
  }
})
}

exports.buscarHotel=(req, res)=>{
  hotel.findOne({$or:[{name: req.query.name}, {stateHotel: req.query.stateHotel}, {type: req.query.type}]},(err,HotelStored )=>{
  if(err){
    res.status(500).send(err);
  }
      res.status(200).json(HotelStored);
  });
};
