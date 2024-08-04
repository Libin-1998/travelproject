import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const dataChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  console.log(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:1515/api/auths/register", data)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container-fluid registerpage">
        <ToastContainer />
        <div className="registerclass">
          <div class="row rowborder g-4">
            <h3 className=" reghead mb-2">REGISTER</h3>

            <div class="col-6 singleline">
              <input
                type="text"
                class="form-control inputwidth"
                placeholder="Full Name"
                onChange={dataChange}
                name="fullname"
              />
            </div>
            <div class="col-6 singleline">
              <input
                type="text"
                class="form-control inputwidth"
                placeholder="Email Address"
                onChange={dataChange}
                name="emailaddress"
              />
            </div>
            <div class="col-6 singleline">
              <input
                type="password"
                class="form-control inputwidth"
                placeholder="Password"
                onChange={dataChange}
                name="password"
              />
            </div>
            <div class="col-6 singleline">
              <input
                type="text"
                class="form-control inputwidth"
                placeholder="number"
                onChange={dataChange}
                name="number"
              />
            </div>
            <div class="col-6 singleline">
              <input
                type="text"
                class="form-control inputwidth"
                placeholder="Age"
                onChange={dataChange}
                name="age"
              />
            </div>
            <div class="col-6 singleline">
              <input
                type="text"
                class="form-control inputwidth"
                placeholder="Place"
                onChange={dataChange}
                name="place"
              />
            </div>

            <div className="registerbutton">
            <button class="animated-button regbutton" onClick={handleSubmit}>
  <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
  <span class="text">Register</span>
  <span class="circle"></span>
  <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
    ></path>
  </svg>
</button>
<h6 className="regquestion">Already have an account ? <Link to={'/login'} className="reglinkline">Login</Link></h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
