import React, { useEffect, useState } from "react";
import "./Trip.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import RingLoader from "react-spinners/SyncLoader";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "../../redux/reducers/PackageSlice";
import { Alert } from "bootstrap";
import Loader from "../loader/Loader";

export default function Trip() {
  // const trips=useSelector((state)=>state.trip.tripdata)
  // console.log(trips);

  const data = useSelector((state) => state.packages.package);
  const status = useSelector((state) => state.packages.status);

  const dispatch = useDispatch();

  const token = sessionStorage.getItem("token");
  const roles = sessionStorage.getItem("role");
  const logs = sessionStorage.getItem('logged')

  console.log(typeof token);
  
  const navigate = useNavigate();

  // const [data, SetData] = useState([]);

  const continueButton=(event)=>{
event.preventDefault()
toast.success('Please Login First')
setTimeout(() => {
  navigate('/login')
}, 2000);
  }
  useEffect(() => {
    dispatch(getPackage());
  }, []);
  


  if (status === "loading") {
    return (<Loader/>)
    
  }
  if (status === "error") {
    return (
      <Alert className="text-center" key="danger" variant="danger">
        Error while loading ! Try again later
      </Alert>
    );
  }

  return (
    <>
    <ToastContainer/>
    
      {data.length == 0 ? (
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
            <RingLoader color="#68dcd6" size={20} speedMultiplier={1} />
          </div>
        </>
      ) : (
        <>
          <Container fluid className="trippage">
            <Row className="triprow">
              {data.map((events) => (
                <>
                  <Col className="parent">
                    <Col className="tripcol">
                      <div className="imgplace">
                        <img
                          src={`/images/${events.image}`}
                          alt=""
                          style={{ height: "250px", width: "300px" }}
                        />
                      </div>
                      <div className="texttrip">{events.place}</div>
                    </Col>

                    <Col className="divtwo">
                      <h6 className="textcolor">{events.content}</h6>
                      <h6>
                        <span style={{ color: "green" }}>${events.price}</span>{" "}
                        per person
                      </h6>

{logs==='true' ?(<>
                      <button className="continuebutt">
                        {" "}
                        <Link
                          to={`/tripsingleview/${events._id}`}
                          className="contline"
                        >
                          <span>Continue</span>
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
                        </Link>
                      </button>
                      </>
                    ):(
                    <>
                      <button className="continuebutt" onClick={continueButton}>
                        {" "}
                       
                          <span>Continue</span>
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
                      </button>
                      </>)}
                    </Col>
                  </Col>
                </>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  );
}
