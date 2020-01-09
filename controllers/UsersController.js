const user = require("../models/Users");

exports.crearUsuario=(req, res)=>{
  let User = new user(req.body);
  User.save((err, UserStored) =>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json({message: 'usuario creado', UserStored});
  });
};

exports.buscarUsuario=(req, res)=>{
  user.find({},(err,UserStored )=>{
    if(err){
      res.status(500).send(err);
    }
     res.status(200).json(UserStored);
  });
};

exports.borrarUsuario = (req, res) => {
  user.remove({ _id: req.query._id}, (err, UserStored) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "usuario borrado" });
  });
};

exports.updateUsuario = (req, res) => {
  user.findOneAndUpdate(req.query._id,{name: req.body.name},{ new: true },(err, UserStored) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({message: "actualizacion exitosa", UserStored});
    });
};
