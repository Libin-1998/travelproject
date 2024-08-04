var mongoose=require('mongoose')
var TripSchema=new mongoose.Schema({
    place:{type:String,required:true},
    content:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
})
module.exports=mongoose.model('trips',TripSchema)