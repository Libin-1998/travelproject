import React from 'react'
import RingLoader from "react-spinners/SyncLoader";

export default function Loader() {

const online=navigator.onLine

  return (
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
          <h1 className='text-center'>Please Check Your Internet</h1><br />

          </div>

    </>
  )
}
