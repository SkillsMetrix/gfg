const jwt= require('jsonwebtoken')

const config= require('./config')

module.exports=(req,res,next) =>{

    const token=req.header['x-access-token']
    if(token) {
        jwt.verify(token,config.secret,function(err,decoded){
            if(err){
                return res.status(401).json({"error":true,"message":"UnAuthorized Access"})
            }
            req.decoded= decoded
            next()
        })
    }else {
        res.status(403).send({"error":true,"message":"No Token Found"})
    }
}
