const express = require('express')
const app = express()
const cors =  require('cors')
app.use(cors())
var mongoose=require('mongoose')
var mongo = "mongodb+srv://rushikesh:Asdfghjkl123@cluster0.jejlv.mongodb.net/NewDB?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongo).then((res)=>{console.log("conected")}).catch((err)=>{console.log("err:..`",err)})
const todolist = require('./model/todolist.model')



app.get("/",((req,res)=>{
    todolist.find({}).then(((data)=>{
      res.json(data)
    })).catch(((err)=>{
        console.log(err)
    }))
    
}))




// app.get("/del",((req,res)=>{
//     todolist.findByIdAndDelete(x).then((res)=>(
//         console.log(res)
//     ))
//     .catch((res)=>{
//         console.log(res)
//     })
// }))




 






app.listen(4500)