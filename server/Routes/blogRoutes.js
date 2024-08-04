var express=require('express')
var mongoose=require('mongoose')
const blogSchema = require('../Models/blogSchema')
const multer=require('multer')
const auth = require('../middlewares/auth')

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../client/public/images/uploads/') 
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage})

var blogRoutes=express.Router()

blogRoutes.post('/addData',upload.single('image'),auth,async(req,res)=>{
    console.log(req.body);
    const add={
        location:req.body.location,
        content:req.body.content,
        dateofvisit:req.body.dateofvisit,
        image:req.file.filename,
    }
    const save=await blogSchema(add).save()
    if(save){
        return res.status(201).json({
            success:true,
            error:false,
            message:'successfully added',
          
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to add'
        })
    }
})


blogRoutes.get('/viewData',async(req,res)=>{
    const view=await blogSchema.find()
    if(view){
        return res.status(200).json({
            success:true,
            error:false,
            message:'view successfully',
            data:view,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to view'
        })
    }
})

blogRoutes.get('/singleview/:id',auth,async(req,res)=>{
    const views= await blogSchema.findOne({_id:req.params.id})
    if(views){
        return res.status(200).json({
            success:true,
            error:false,
            message:'successfully find',
            data:views,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'find error'
        })
    }
})

blogRoutes.put('/update/:id',upload.single('image'),auth,async(req,res)=>{
    const olddata=await blogSchema.findOne({_id:req.params.id})
    const edit={
        location:req.body.location?req.body.location:olddata.location,
        content:req.body.content?req.body.content:olddata.content,
        dateofvisit:req.body.dateofvisit?req.body.dateofvisit:olddata.dateofvisit,
        image:req.file?req.file.filename:olddata.image,
    }
    const update=await blogSchema.updateOne({_id:req.params.id},{$set:edit})
    if(update){
        return res.status(200).json({
            success:true,
            error:false,
            message:'successfully updated',
            data:update,
            updateStatus:edit,
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:false,
            message:'not updated'
        })
    }
})

blogRoutes.delete('/delete/:id',async(req,res)=>{
    const deleted=await blogSchema.deleteOne({_id:req.params.id})
    if(deleted){
        return res.status(200).json({
            success:true,
            error:false,
            message:'successfully deleted '
        })
    }
    else{
        return res.status(400).json({
            success:false,
            error:true,
            message:'error to delete'
        })
    }
})


module.exports=blogRoutes;