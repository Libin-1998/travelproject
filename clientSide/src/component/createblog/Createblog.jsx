import React, { useState } from "react";
import "./Createblog.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

  export default function Createblog() {
  const navigate=useNavigate()

  const token=sessionStorage.getItem('token')

  const [data, setData] = useState({});
  const dataChange = (event) => {
    const name = event.target.name; 
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };
  console.log(data);

  const imageHandler = (event) => {
    console.log(event);
    setData({ ...data, image: event.target.files[0] });
    console.log(data.image);
  };

  const handleSubmit = (event) => {
event.preventDefault();
    const datas = new FormData();
    datas.append("location", data.location);
    datas.append("dateofvisit", data.dateofvisit);
    datas.append("content", data.content);
    datas.append("image", data.image);

    axios
      .post("https://travelproject-2.onrender.com/api/blog/addData", datas,{
        headers:{Authorization:`Bearer ${token}`},
      })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message)

        setTimeout(() => {
          navigate('/viewblog')
        }, 2000);


      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
    

      <div className="container-fluid createblogpage">
        <ToastContainer/>
        <form onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="forms"
        >
          <h2 className="classh2">CREATE BLOG</h2>
          <div className="alignment">
            <div class="inputbox mb-3">
              <label for="formGroupExampleInput" class="form-label bloglabel">
                Location
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={dataChange}
                name="location"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label bloglabel">
                Date of visit
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput2"
                onChange={dataChange}
                name="dateofvisit"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label bloglabel">
                content
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={dataChange}
                name="content"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label bloglabel">
                Image
              </label>
              <input
                type="file"
                class="form-control inputwid"
                id="formGroupExampleInput2"
                onChange={imageHandler}
                name="image"
              />
            </div>

            <div className="buttonsubmit">
              <button className="butsubmit" type="submit">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
