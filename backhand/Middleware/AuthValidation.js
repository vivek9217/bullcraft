const joi =require("joi");

const singupvalidation =(req,res,next)=>{
    const schema=joi.object({
        name:joi.string().min(4).max(40).required(),
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required()
    });
    const {error}= schema.validate(req.body);
    if(error)
        return  res.status(400).json({message:"Bad request",error});
    next();
}

const loginvalidation =(req,res,next)=>{
    const schema=joi.object({
        email:joi.string().email().required(),
        password:joi.string().min(4).max(100).required()
    });
    const {error}= schema.validate(req.body);
    if(error)
        return  res.status(400).json({message:"Bad request",error});
    next();
}

module.exports={singupvalidation,loginvalidation};
