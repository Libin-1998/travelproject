import React, { useState } from "react";
import "./Createtrip.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import {useNavigate } from "react-router-dom";

export default function Createtrip() {
  const navigate = useNavigate();

  const token = sessionStorage.getItem("token");

  const [data, SetData] = useState({});

  const inputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    SetData({ ...data, [name]: value });
  };
  console.log(data);

  const inputImage = (event) => {
    SetData({ ...data, image: event.target.files[0] });
    console.log(data.image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("place", data.place);
    formData.append("content", data.content);
    formData.append("price", data.price);
    formData.append("image", data.image);

    console.log(formData);

    axios
      .post("http://localhost:1515/api/trip/addtrip", formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        toast.success(response.data.message)

        setTimeout(() => {
          navigate('/viewdata')
        }, 2000);


      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container-fluid createtrippage">
        <ToastContainer />

        <form
          encType="multipart/form-data"
          className="createtripclass"
          onSubmit={handleSubmit}
        >
          <h2 className="h2class">CREATE TRIP</h2>
          <div className="">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label createtriplabel">
                Place
              </label>
              <input
                type="text"
                class="form-control inputwidtrip"
                id="formGroupExampleInput"
                onChange={inputChange}
                name="place"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label createtriplabel">
                Content
              </label>
              <input
                type="text"
                class="form-control inputwidtrip"
                id="formGroupExampleInput2"
                onChange={inputChange}
                name="content"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label createtriplabel">
                Price
              </label>
              <input
                type="text"
                class="form-control inputwidtrip"
                id="formGroupExampleInput"
                onChange={inputChange}
                name="price"
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label createtriplabel">
                Image
              </label>
              <input
                type="file"
                class="form-control inputwidtrip"
                id="formGroupExampleInput2"
                onChange={inputImage}
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
