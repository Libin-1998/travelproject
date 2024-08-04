var mongoose=require('mongoose')
var blogSchema=new mongoose.Schema({
    location:{type:String,required:true},
    content:{type:String,required:true},
    dateofvisit:{type:String,required:true},
    image:{type:String,required:true},
})

module.exports=mongoose.model('blogs',blogSchema)