import axios from 'axios'
import React, { useState } from 'react'
import './Createdestination.css'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


export default function Createdestination() {

    const navigate=useNavigate()
    const tokens=sessionStorage.getItem('token')

    const[data,setData]=useState({})

    const dataChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
    setData({...data,[name]:value})
    }
    console.log(data);

    const imageHandler=(event)=>{
        setData({...data,image:event.target.files[0]})
        console.log(data.image);
    }

    const handleSubmit=(event)=>{
        event.preventDefault()

        const formdata=new FormData()
        formdata.append('place',data.place)
        formdata.append('title',data.title)
        formdata.append('country',data.country)
        formdata.append('image',data.image)

        axios.post('http://localhost:1515/api/dest/adddata',formdata,{
            headers:{Authorization:`Bearer ${tokens}`},
        })
        .then((response)=>{
            console.log(response);
            toast.success(response.data.message)

            setTimeout(() => {
                navigate('/viewdata')
            }, 2000);
        })
        .catch((error)=>{
            console.log(error);
        })

    }




  return (
    <>

<div className="container-fluid createDespage">
        <ToastContainer/>
        <form onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="Desforms"
        >
          <h2 className="Desh2">CREATE DESTINATION</h2>
          <div className="Desclass">
            <div class="inputbox mb-3">
              <label for="formGroupExampleInput" class="form-label createdes">
                Place
              </label>
              <input
                type="text"
                class="form-control inputwidspot"
                id="formGroupExampleInput"
                onChange={dataChange}
                name="place"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label createdes">
                Title
              </label>
              <input
                type="text"
                class="form-control inputwidspot"
                id="formGroupExampleInput2"
                onChange={dataChange}
                name="title"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label createdes">
                Country
              </label>
              <input
                type="text"
                class="form-control inputwidspot"
                id="formGroupExampleInput"
                onChange={dataChange}
                name="country"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label createdes">
                Image
              </label>
              <input
                type="file"
                class="form-control inputwidspot"
                id="formGroupExampleInput2"
                onChange={imageHandler}
                name="image"
              />
            </div>

            <div className="Desbuttonsubmit">
              <button className="Desbutsubmit" type="submit">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>

      
    </>
  )
}
