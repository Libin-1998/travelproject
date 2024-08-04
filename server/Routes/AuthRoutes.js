var express=require('express')
var mongoose=require('mongoose')
const LoginSchema = require('../Models/LoginSchema')
const RegisterSchema = require('../Models/RegisterSchema')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

var AuthRoutes=express.Router()

AuthRoutes.post('/register',async(req,res)=>{
    try {

        const hashedPassword=await bcrypt.hash(req.body.password,12)
        const logIn={
            emailaddress:req.body.emailaddress,
            password:hashedPassword,
            number:req.body.number,
            role:'user',
        }
        const saved=await LoginSchema(logIn).save()

        const reg={
            age:req.body.age,
            place:req.body.place,
            loginId:saved._id,
            fullname:req.body.fullname,

            }
            const save=await RegisterSchema(reg).save()

            if(saved&&save){
                return res.status(201).json({
                    success:true,
                    error:false,
                    message:'saved successfully'
                })
            }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            error:true,
            message:'something went wrong',
            errorMessage:error.message,
        })

    }
})


AuthRoutes.post('/login',async(req,res)=>{
    try {
        const emailaddress=req.body.emailaddress;
        const password=req.body.password;
        if(!emailaddress||!password){
            return res.status(400).json({
                success:false,
                error:true,
                message:'all fields are required'
            })
        }
        
        const checkmail=await LoginSchema.findOne({emailaddress:req.body.emailaddress})
        if(!checkmail){
            return res.status(400).json({
                success:false,
                error:true,
                message:"email doesn't exist,register first"
            })
        }

        const passwordCorrect=await bcrypt.compare(req.body.password,checkmail.password)
        if(passwordCorrect){
            const token=jwt.sign({
                userId:checkmail._id,
                emailaddress:checkmail.emailaddress,
                role:checkmail.role,
            },
            process.env.JWT_KEY,
            {
                expiresIn:'1h',
            })

            return res.status(200).json({
                success:true,
                error:false,
                message:'Login Success',
                token:token,
                data:checkmail,
                role:checkmail.role,
                loginId:checkmail._id,

            })
        }
        else{
            return res.status(400).json({
                success:false,
                error:true,
                message:'incorrect password',
            })

        }

    } catch (error) {
        return res.status(500).json({
            success:false,
            error:"true",
            message:'something went wrong'

        })
    }
})
AuthRoutes.get("/profile/:id", async (req, res) => {

    const check = await RegisterSchema.aggregate([
        {
          '$lookup': {
            'from': 'logins', 
            'localField': 'loginId', 
            'foreignField': '_id', 
            'as': 'result'
          }
        }, {
          '$unwind': {
            'path': '$result'
          }
        }, 
        {
            $match:{loginId:new mongoose.Types.ObjectId(req.params.id)}
        },{
          '$group': {
            '_id': '$_id', 
            'loginId': {
              '$first': '$loginId'
            }, 
            'fullname': {
              '$first': '$fullname'
            }, 
            'emailaddress': {
              '$first': '$result.emailaddress'
            }, 
            'place': {
              '$first': '$place'
            }, 
            'age': {
              '$first': '$age'
            }
          }
        }
      ])
    if(check){
      return res.status(200).json({
        success:true,
        error:false,
        message:'view success',
        data:check,
      })
    }
    else{
      return res.status(400).json({
        success:false,
        error:true,
        message:'view error'
      })
    }
  
  })

module.exports=AuthRoutes;