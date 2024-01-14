const mongoose =require('mongoose')
const {Schema}=mongoose;
const userSchema = new Schema({
    username: { type: String, required: true },
    name:{type: String, required: true},
    email:{type:String , required :true},
    password: { type: String, required: true },
    date:{type:Date,default:Date.now},
    contact_no :{type:Number},
    year_of_passing :{type:Date},
    branch :{type:String},
})

module.exports=mongoose.model('user',userSchema);