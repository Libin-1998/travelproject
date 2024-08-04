import React, { useEffect, useState } from "react";
import "./Destination.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Card from "./Card";
import RingLoader from "react-spinners/SyncLoader";
import Loader from "../loader/Loader";

export default function Destination() {
  const tokens = sessionStorage.getItem("token");

  const [list, listData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1515/api/dest/viewdata", {
        headers: { Authorization: `Bearer ${tokens}` },
      })
      .then((response) => {
        console.log(response);
        listData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <>
    
      {list.length == 0 ? (
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
            No data
            {/* <RingLoader color="#68dcd6" size={20} speedMultiplier={1} /> */}
          </div>
        </>
      ) : (
        <>
          <div className="destpage">
            <ToastContainer />

            {list.map((datas) => (
              <>
                <Card destinations={datas} />
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
