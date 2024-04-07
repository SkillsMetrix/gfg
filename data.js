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







const express= require('express')
const json= require('jsonwebtoken')
const router= express.Router()

const config= require('./config')

const app=express()
const bp= require('body-parser')


app.use(bp.json())

router.use(require("./tokenChecker"))
router.get("/secure",(req,res)=>{
    res.send('private and secured route')
})

app.use("/api",router)
app.listen(4000,()=>{
console.log('server is ready');

})
