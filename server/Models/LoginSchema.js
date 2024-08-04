var mongoose=require('mongoose')
var LoginSchema=new mongoose.Schema({
    emailaddress:{type:String,required:true},
    password:{type:String,required:true},
    number:{type:Number,required:true},
    role:{type:String,required:true},
})

module.exports=mongoose.model('login',LoginSchema)