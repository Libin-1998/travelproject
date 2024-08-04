var mongoose=require('mongoose')
var RegisterSchema=new mongoose.Schema({
    loginId:{type:mongoose.Types.ObjectId,ref:'login'},
    place:{type:String,required:true},
    age:{type:String,required:true},
    fullname:{type:String,required:true},

})

module.exports=mongoose.model('register',RegisterSchema)