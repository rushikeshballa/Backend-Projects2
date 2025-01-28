const mongoose = require('mongoose')
const { Schema } = mongoose;

const compaintsSchema = new Schema({ firstName:String,
      Number:Number,
      Complaint:String,
      Status:String,
      Branch:String,
      date:Object}
)
const Compaints = mongoose.model("Complaint",compaintsSchema)
module.exports = Compaints;

