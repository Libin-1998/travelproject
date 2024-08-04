var express=require('express')
var mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const AuthRoutes = require('./Routes/AuthRoutes')
const blogRoutes = require('./Routes/blogRoutes')
const TripRoutes = require('./Routes/TripRoutes')
const destinationRoutes = require('./Routes/destinationRoutes')
dotenv.config()

var app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// connecting to database
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('successfully connected');
})
.catch(()=>{
    console.log('connection error');
})


app.use('/api/auths',AuthRoutes)
app.use('/api/blog',blogRoutes)
app.use('/api/trip',TripRoutes)
app.use('/api/dest',destinationRoutes)

app.listen(process.env.PORT,()=>{
    console.log('running on',process.env.PORT);
})