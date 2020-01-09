const apikey = require("../models/Apikey");


exports.createApiKey=(req, res)=>{
  let ApiKey = new apikey(req.body);
  ApiKey.save((err, ApiKeyStored) =>{
    if(err){
      res.status(500).send(err);
    }
    res.status(200).json({message: 'creado exitosamente', ApiKeyStored});
  });
};

exports.buscarApiKey=(req, res)=>{
  apikey.find({},(err,api)=>{
    if(err){
      res.send({message: 'no existe'})
    }
    res.status(200).json(api)
  })
}
