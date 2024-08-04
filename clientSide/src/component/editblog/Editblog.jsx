import React, { useEffect, useState } from "react";
import "./Editblog.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function Editblog() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  console.log(token);

  const [values, setValues] = useState({
    location: "",
    dateofvisit: "",
    content: "",
    image: "",
  });
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:1515/api/blog/singleview/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        setValues(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues({ ...values, [name]: value });
  };
  console.log(values);

  const changeImage = (event) => {
    setValues({ ...values, image:event.target.files[0]});
    console.log(values.image);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData=new FormData()
    formData.append('location',values.location)
    formData.append('dateofvisit',values.dateofvisit)
    formData.append('content',values.content)
    formData.append('image',values.image)

    axios
      .put(`http://localhost:1515/api/blog/update/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        if (response.data.data.modifiedCount === 1) {
          console.log(response);
          toast.success(response.data.message);

          // setTimeout(() => {
          //   navigate('/viewblog')
          // }, 2000);
       
        }
        else {
          toast.success("Already Modified");
          setTimeout(() => {
            navigate('/viewblog')
          }, 2000);
        }

        
      })

      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="container-fluid editpage">
        <ToastContainer />
        <form className="editform" onSubmit={handleSubmit}>
          <div className="editclass">
            <div class="inputbox mb-3">
              <label for="formGroupExampleInput" class="form-label">
                Location
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={changeData}
                name="location"
                value={values.location}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Date of visit
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput2"
                onChange={changeData}
                name="dateofvisit"
                value={values.dateofvisit}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">
                content
              </label>
              <input
                type="text"
                class="form-control inputwid"
                id="formGroupExampleInput"
                onChange={changeData}
                name="content"
                value={values.content}
              />
            </div>
            <div class="mb-3">
              <label for="formGroupExampleInput2" class="form-label">
                Image
              </label>
              <br />

              <img
                src={`/images/uploads/${values.image}`}
                alt=""
                height={"40px"}
                width={"60px"}
                onError={(event) =>
                  event.target.src = `/images/${values.image.name}`}/>

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

            <div className="editpagebutton">
              <button className="editpagebutt" type="submit">
                submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
