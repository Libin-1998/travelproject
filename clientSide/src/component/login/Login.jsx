import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Destination from '../destination/Destination'
import { useDispatch, useSelector } from 'react-redux'


export default function Login() {
const navigate=useNavigate()

  const[data,setData]=useState({})

  const dataChange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setData({...data,[name]:value})
  }

  console.log(data);

const handleSubmit=(event)=>{
  event.preventDefault()
  axios.post('https://travelproject-2.onrender.com/api/auths/login',data)
  .then((response)=>{
    console.log(response);
    toast.success(response.data.message)

    
    setTimeout(() => {
      navigate('/')
      window.location.reload()
    }, 2000);

    sessionStorage.setItem('logged',true)
    sessionStorage.setItem('token',response.data.token)
    sessionStorage.setItem('role',response.data.role)
    sessionStorage.setItem('id',response.data.loginId)

  })
  .catch((error)=>{
    console.log(error);
    toast.error(error.response.data.message)
  })
}



  return (
    <>

    <div className='container-fluid loginpage'>
      <ToastContainer/>
            <div className='loginclass'>
        <h2 className='loghead'>LOGIN</h2>

        <div class="logbox ">
    <input type="text" class="form-control " placeholder="Email Address" onChange={dataChange} name='emailaddress'/>
  <br />
    <input type="password" class="form-control " placeholder="Password" onChange={dataChange} name='password'/>
  </div>
<button className='logbutt' onClick={handleSubmit}>Login</button>
<h6 className='logquestion'>Dont't have an account ? <Link to={'/register'} className='loglinkline'>Signup</Link> </h6>

        </div>
    </div>
      
    </>
  )
}
