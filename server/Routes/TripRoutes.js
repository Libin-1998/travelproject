var express=require('express')
var mongoose=require('mongoose')
const TripSchema = require('../Models/TripSchema')
const multer = require('multer')
const auth = require('../middlewares/auth')


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/images/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage})

var TripRoutes=express.Router()

TripRoutes.post('/addtrip',auth,upload.single('image'),async(req,res)=>{
    console.log(req.body);
    const add={
        place:req.body.place,
        content:req.body.content,
        price:req.body.price,
        image:req.file.filename,
    }
    const save=await TripSchema(add).save()
    if(save){
       return res.status(201).json({
            success:true,
            error:false,
            message:'added successfully'
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'unsuccess'
        })
    }
})

TripRoutes.get('/viewdata',async(req,res)=>{
    const views=await TripSchema.find()
    if(views){
        return res.status(200).json({
            success:true,
            error:false,
            message:'viewed successfully',
            data:views,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'not view'
        })
    }
})

TripRoutes.get('/singleview/:id',auth,async(req,res)=>{
    const viewed= await TripSchema.findOne({_id:req.params.id})
    if(viewed){
        return res.status(200).json({
            success:true,
            error:false,
            message:'singleview success',
            data:viewed,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'singleview error',
        })
    }
})

TripRoutes.put('/update/:id',auth,upload.single('image'),async(req,res)=>{
    const edit=await TripSchema.findOne({_id:req.params.id})
    const updated={
        place:req.body.place?req.body.place:edit.place,
        content:req.body.content?req.body.content:edit.content,
        price:req.body.price?req.body.price:edit.price,
        image:req.file?req.file.filename:edit.image,
    }
    const update=await TripSchema.updateOne({_id:req.params.id},{$set:updated})
    if(update){
        return res.status(200).json({
            success:true,
            error:false,
            message:'updated successfully',
            data:update,
            updatestatus:updated,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to update'
        })
    }
})

TripRoutes.delete('/delete/:id',auth,async(req,res)=>{
    const deleted=await TripSchema.deleteOne({_id:req.params.id})
    if(deleted){
        return res.status(200).json({
            success:true,
            error:false,
            message:'deleted successfully',
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to delete',
        })
    }

})

module.exports=TripRoutes






