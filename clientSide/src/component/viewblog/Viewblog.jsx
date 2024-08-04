import React, { useEffect, useState } from 'react'
import './Viewblog.css'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import RingLoader from 'react-spinners/SyncLoader'
import { useDispatch, useSelector } from 'react-redux'
import { getBlog } from '../../redux/reducers/blogSlice';
import { Alert } from 'bootstrap';


export default function Viewblog() {

  // const blog=useSelector((state)=>state.trip.blogdata)
  // console.log(blog);

  const navigate=useNavigate()

  const data=useSelector((state)=>state.blogs.blog)
  const status=useSelector((state)=>state.blogs.status)

  const dispatch=useDispatch()

  const token=sessionStorage.getItem('token')
  const logs=sessionStorage.getItem('logged')
  console.log(token);

  // const [data,setData]=useState([])
  
  useEffect(()=>{
    
    dispatch(getBlog())

  },[])

 const viewmoreButton=(event)=>{
  event.preventDefault()
  toast.success('Please Login First')
  setTimeout(() => {
    navigate('/login')
  }, 2000);
 }

  if(status==='loading'){
    return <h1 className="text-center">Loading...</h1>
  }
if(status==='error'){
  return(
    <Alert className='text-center' key='danger' variant='danger'>
    Error while loading ! Try again later
    </Alert>
  )
}

  return (
    <>
<ToastContainer/>
    {data.length==0 ? (
      <>
        <div
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80vh",
            }}
          >
            <RingLoader
  color="#68dcd6"
  size={20}
  speedMultiplier={1}
/>
          </div>
      
      </>
    ):(
      <>
      
      <div className='blogpage'>

{data.map((datas)=>(
    <>
 <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={`/images/uploads/${datas.image}`} style={{height:'180px'}}/><Card.Body>
        <Card.Title >{datas.location}</Card.Title>
        <Card.Text claass className='contentclass'>{datas.content}</Card.Text>
        <Card.Text>{datas.dateofvisit}</Card.Text>


{logs=='true' ? (<>

  <Link to={`/viewsingle/${datas._id}`} className='viewlink'>
        <Button className='viewbutton'>
        <span className='spanview'>View More</span>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 74 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="37"
                              cy="37"
                              r="35.5"
                              stroke="black"
                              stroke-width="3"
                            ></circle>
                            <path
                              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                              fill="black"
                            ></path>
                          </svg>
          </Button>
        </Link>

</>
):(
<>
        {/* <Link to={`/viewsingle/${datas._id}`} className='viewlink'> */}
        <Button className='viewbutton' onClick={viewmoreButton}>
        <span className='spanview'>View More</span>
                          <svg
                            width="34"
                            height="34"
                            viewBox="0 0 74 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="37"
                              cy="37"
                              r="35.5"
                              stroke="black"
                              stroke-width="3"
                            ></circle>
                            <path
                              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                              fill="black"
                            ></path>
                          </svg>
          </Button>
        {/* </Link> */}
        </>)}
      </Card.Body>
    </Card>
    </>
  ))}
   
    </div>
      
      </>
    )}

    </>
  )}
