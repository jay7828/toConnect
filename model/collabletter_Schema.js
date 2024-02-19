const mongoose = require('mongoose');
const { Schema } = mongoose;

const collab_letterSchema = new mongoose.Schema({
    
    pid:{type:String , required:true},
    ptitle:{type:String , required:true},
    letterID:{type:String , required:true},
    sender: { type: String,required:true },
    receiver: { type: String, required: true },
    subject: { type: String, required: true }, 
    body :{ type: String, required: true },
    date:{type:Date,default:Date.now},
  });

  module.exports = mongoose.model('collab_letters', collab_letterSchema);
