import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'


export default function Profile() {

    const id=sessionStorage.getItem('id')

    const [list,setlist]=useState({})


useEffect(()=>{
    axios.get(`https://travelproject-2.onrender.com/api/auths/profile/${id}`)
    .then((response)=>{
console.log(response);
setlist(response.data.data[0])


    })
    .catch((error)=>{
        console.log(error);
    })
    
},[])

  return (
    <>

    <div className='profilepage'>
        <div className='profileclass'>
            <h1 className='profileh1'>PROFILE</h1>
            <div className='profilepic'>
<img src="./images/defaultprofile.jpeg" alt="" height={'70px'} width={'70px'} className='profileimg'/>
</div>
<h5 className='profileh5s'>Name : {list.fullname}</h5>
<h5 className='profileh5s'>Email id : {list.emailaddress}</h5>
<h5 className='profileh5s'>Place : {list.place}</h5>
<h5 className='profileh5s'>Age : {list.age}</h5>

        </div>

    </div>
      
    </>
  )
}
