import React, { useEffect, useState } from "react";
import "./Viewsingle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import RingLoader from "react-spinners/SyncLoader";



export default function Viewsingle() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");
  const roles = sessionStorage.getItem("role");

  const [data, SetData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://travelproject-2.onrender.com/api/blog/singleview/${id}`,{
        headers:{Authorization:`Bearer ${token}`},
      }


      )
      .then((response) => {
        console.log(response);
        SetData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteData = (id) => {
    axios
      .delete(`https://travelproject-2.onrender.com/api/blog/delete/${id}`)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);

        setTimeout(() => {
          navigate("/viewblog");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>

    {data.length==0 ?(
      <>
      <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"}}>
      <RingLoader color="#68dcd6" size={20} speedMultiplier={1} />
      </div>
      </>
    ):(
    <>
   
      <Container className="viewonepage">
        <ToastContainer />
<h3 style={{color:'green',padding:"10px"}}>{data.location}</h3>
        <Row>
          <Col className="column_img">
            <img
              src={`/images/uploads/${data.image}`}
              alt=""
              className="col_img"
            />
          </Col>

          <Col className="column_text">
            <h5>{data.content}</h5>
          </Col>
      

      {roles == "admin" ? (
        <>
          <div className="buttons">
            <button className="editbutton">
              {" "}
              <Link to={`/editblog/${data._id}`} className="lineedit">
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
        </Row>
        </Container>
        </>)}
    </>
  );
}
