import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Header.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const logIn = sessionStorage.getItem("logged");
  const loggedIn = sessionStorage.getItem("role");

  const removed = () => {
    // sessionStorage.removeItem('logged')
    sessionStorage.clear();
    sessionStorage.clear();

    setTimeout(() => {
      navigate("/");
    }, 2000);
    window.location.reload();
  };

  // const remove=()=>{
  //   sessionStorage.removeItem('loggedIn')

  // setTimeout(()=>{
  //   navigate('/')
  // },2000)
  //   window.location.reload()

  // }


  return (
    <>
      <Navbar expand="lg" className="navBG">
        <Container fluid className="navpage">
          <Navbar.Brand href="/" className="titlecolor">
          
            <img src="/images/tripsgo.png" alt=""  height={"120px"}  
              width={"130px"} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="togglecolor" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto ms-auto my-2 my-lg-0 navstyle"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {logIn == "true" ? (
                <>
                  <Nav.Link href="/" className="navcolor">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/destination" className="navcolor">
                    DESTINATIONS
                  </Nav.Link>
                  <Nav.Link href="/trip" className="navcolor">
                    TRIPS
                  </Nav.Link>
                 
                  <Nav.Link href="/viewblog" className="navcolor">
                    BLOG
                  </Nav.Link>

                  {loggedIn == "admin" ? (
                    <>
                     
                      <Nav.Link href="/createtrip" className="navcolor">
                        CREATE TRIP
                      </Nav.Link>
                      <Nav.Link href="/createdestination" className="navcolor">
                        CREATE SPOT
                      </Nav.Link>
                    </>
                  ) : (
                    ""
                  )}
 <Nav.Link href="/createblog" className="navcolor">
                        CREATE BLOG
                      </Nav.Link>

                      <Nav.Link href="/about" className="navcolor">
                    ABOUT
                  </Nav.Link>

                      <Nav.Link href="/profile" className="navcolor">
                    PROFILE
                  </Nav.Link>
                  <Nav.Link href="/" className="navcolor" onClick={removed}>
                    LOGOUT
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link href="/" className="navcolor">
                    HOME
                  </Nav.Link>
                  <Nav.Link href="/destination" className="navcolor">
                    DESTINATIONS
                  </Nav.Link>
                  <Nav.Link href="/trip" className="navcolor">
                    TRIPS
                  </Nav.Link>

                  <Nav.Link href="/viewblog" className="navcolor">
                    BLOG
                  </Nav.Link>

                  <Nav.Link href="/about" className="navcolor">
                    ABOUT
                  </Nav.Link>
                 
                  <Nav.Link href="/register" className="navcolor">
                    REGISTER
                  </Nav.Link>
                  <Nav.Link href="/login" className="navcolor">
                    LOGIN
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Button className="buttoncolor">START PLANNING</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
