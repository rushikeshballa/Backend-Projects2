const express = require('express')
const app = express()
const cors =  require('cors')
app.use(cors())
var mongoose=require('mongoose')
var mongo = "mongodb+srv://rushikesh:Asdfghjkl123@cluster0.jejlv.mongodb.net/Bhashyam?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongo).then((res)=>{console.log("conected")}).catch((err)=>{console.log("err:..`",err)})
const Complaints = require('./model/complaints.modle')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

    Complaints.find({}).then((res)=>{;
    }).catch((err)=>{console.log(err);
        
    })

    app.get("/",((req,res)=>{
        Complaints.find().then((data)=>{
            res.json(data)
        }) 
    }))

    app.post("/add",((req,res)=>{
        newCom = new Complaints(req.body)
        newCom.save()
    }))

app.listen(4500)