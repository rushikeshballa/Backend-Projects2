const mongoose = require('mongoose')
const { Schema } = mongoose;

const todolistsSchema = new Schema({
    name:String,
    age:Number
})
const Todolists = mongoose.model("Todolist",todolistsSchema)
module.exports = Todolists;
