var express=require('express')
var mongoose=require('mongoose')
const destinationSchema = require('../Models/destinationSchema')
const multer=require('multer')
const auth = require('../middlewares/auth')

var destinationRoutes=express.Router()

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/images/')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage})


destinationRoutes.post('/adddata',auth,upload.single('image'),async(req,res)=>{
    const add={
        place:req.body.place,
        title:req.body.title,
        country:req.body.country,
        image:req.file.filename,
    }
    const saved=await destinationSchema(add).save()
    if(saved){
        res.status(201).json({
            success:true,
            error:false,
            message:'add successfully',
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            maessge:'add failed',
        })
    }
})


destinationRoutes.get('/viewdata',async(req,res)=>{
    const viewed=await destinationSchema.find()
    if(viewed){
        res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:viewed,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'view failed'
        })
    }

})


destinationRoutes.get('/singleviewdata/:id',async(req,res)=>{
    const singleview=await destinationSchema.findOne({_id:req.params.id})
    if(singleview){
        res.status(200).json({
            success:true,
            error:false,
            message:'single view success',
            data:singleview,
        })
    }
    else{
        res.status(400).json({
            success:true,
            error:false,
            message:'single view error'
        })
    }
})


destinationRoutes.put('/update/:id',auth,async(req,res)=>{
    const olddata=await destinationSchema.findOne({_id:req.params.id})
    const edit={
        place:req.body.place?req.body.place:olddata.place,
        title:req.body.title?req.body.title:olddata.title,
        country:req.body.country?req.body.country:olddata.country,
        image:req.body.file?req.body.file.filename:olddata.place,
    }
    const updated=await destinationSchema.updateOne({_id:req.params.id},{$set:edit})
    if(updated){
        res.status(200).json({
            success:true,
            error:false,
            message:'successfully updated',
            data:updated,
            updatestatus:edit,
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            message:'updation failed'
        })
    }
})


destinationRoutes.delete('/deletedata/:id',auth,async(req,res)=>{
    const deleted=await destinationSchema.deleteOne({_id:req.params.id})
    if(deleted){
        res.status(200).json({
            success:true,
            error:false,
            message:'deleted successfully'
        })
    }
    else{
        res.status(400).json({
            success:false,
            error:true,
            maessge:'failed to delete'
        })
    }
})

module.exports=destinationRoutes


