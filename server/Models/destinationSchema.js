var mongoose=require('mongoose')
var destinationSchema=new mongoose.Schema({
    place:{type:String,required:true},
    title:{type:String,required:true},
    country:{type:String,required:true},
    image:{type:String,required:true},
})

module.exports=mongoose.model('dest',destinationSchema)