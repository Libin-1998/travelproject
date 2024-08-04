import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { toast, ToastContainer } from 'react-toastify';

export default function Tripsingleview() {

    const token=sessionStorage.getItem('token')
    const roles=sessionStorage.getItem('role')

    const [data,Setdata]=useState({})
    const {id}=useParams()




  useEffect(()=>{
    axios.get(`http://localhost:1515/api/trip/singleview/${id}`,{
headers:{authorization:`Bearer ${token}`},
    })
    .then((response)=>{
        console.log(response);
        Setdata(response.data.data)
    })
    .catch((error)=>{
        console.log(error);
    })

  },[])

  const deleteData=(id)=>{
    axios.delete(`http://localhost:1515/api/trip/delete${id}`)
    .then((response)=>{
        console.log(response.data.message);
    })
    .catch((error)=>{
        console.log(error);
    })
  }


  return (

    <>
<Container>
        <br />
        <ToastContainer />

        <Row>
          <h3 style={{color:'green',padding:'10px'}}>{data.place}</h3>
          <Col className="column_img">
            <img
              src={`/images/${data.image}`}
              alt=""
              className="col_img"
            />
          </Col>

          <Col className="column_text">
            <h3>{data.location}</h3>
            <h5>{data.content}</h5>
          </Col>
        </Row>
      </Container>

      {roles == "admin" ? (
        <>
          <div className="buttons">
            <button className="editbutton">
              {" "}
              <Link to={`/tripedit/${data._id}`} className="lineedit">
                Edit
              </Link>
            </button>
            <button
              className="deletebutton"
              onClick={() => deleteData(data._id)}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        ""
      )}
 
    </>
  )
}
