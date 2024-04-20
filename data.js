
var express= require('express')
var bp= require('body-parser')
var mongoose= require('mongoose')
const empcrud= require('./model')
var app= express()
app.use(bp.json())



app.post('/adduser',(req,res)=>{
    const users= new empcrud({
        ...req.body
    })
    users.save().then(()=> res.send('user is added'))
})
app.get("/loadusers",async(req,res)=>{
    const users= await empcrud.find()
    res.status(200).json(users)
})
app.get("/loadusers/:uname",async(req,res)=>{
    const name=req.params.uname
    const users= await empcrud.find({'uname':name})
    res.status(200).json(users)
})
const startServer=async()=>{

    await mongoose.connect('mongodb+srv://amar:amar123@cluster0.rle5i.mongodb.net/gfg?retryWrites=true&w=majority&appName=Cluster0')
    app.listen(4000,()=>{
        console.log('server is ready with DB connected');
        
    })
}

startServer()


