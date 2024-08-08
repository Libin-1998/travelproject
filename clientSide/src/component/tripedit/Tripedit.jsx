import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import './Tripedit.css'
import { useNavigate, useParams } from 'react-router-dom'


export default function Tripedit() {
    const navigate=useNavigate()
    const token=sessionStorage.getItem('token')

    const[data,setData]=useState({
        place:'',
        content:'',
        price:'',
        image:'',
    })
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`https://travelproject-2.onrender.com/api/trip/singleview/${id}`,{
            headers:{Authorization:`Bearer ${token}`},
        })
        .then((response)=>{
            console.log(response);
            setData(response.data.data)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[])

    const changeData=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setData({...data,[name]:value})
    }
    console.log(data);

const changeImage=(event)=>{
    setData({...data,image:event.target.files[0]})
    console.log(data.image);
}

const handleSubmit=(event)=>{
    event.preventDefault()

    const datas=new FormData()
    datas.append('place',data.place)
    datas.append('content',data.content)
    datas.append('price',data.price)
    datas.append('image',data.image)

    axios.put(`https://travelproject-2.onrender.com/api/trip/update/${id}`,datas,{
        headers:{Authorization:`Bearer ${token}`},
    })
    .then((response)=>{
        console.log(response);
        toast.success(response.data.message)
        setTimeout(() => {
            navigate('/trip')
        }, 2000);
    })
    .catch((error)=>{
        console.log(error);
    })

}

  return (

    <> 
     <div className="container-fluid edittrippage">
        <h1 className='h1trip'>Trip Edit</h1>
        <ToastContainer />
        <form className="edittripform" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="edittripclass">
            <div class="inputbox mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Place
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={changeData}
                name="place"
                value={data.place}
                
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Content
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput2"
                onChange={changeData}
                name="content"
                value={data.content}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Price
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={changeData}
                name="price"
                value={data.price}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Image
              </label>
              <br />

              <img
                src={`/images/${data.image}`}
                alt=""
                height={"40px"}
                width={"60px"}
                onError={(event) =>
                  event.target.src = `/images/uploads/${data.image.name}`}/>

              <br />
              <br />
              <input
                type="file"
                onChange={changeImage}
                class="form-control inputwid"
                id="formGroupExampleInput2"
                name="image"
              />
            </div>

            <div className="edittrippagebutton">
              <button className="edittrippagebutt" type="submit">
                submit
              </button>
            </div>
          </div>
        </form>
      </div> 
      
    </>
  )
}
