import React, { useEffect } from "react";
import "./Home.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Trip from "../trip/Trip";
import { useDispatch, useSelector } from "react-redux";
import { getPackage } from "../../redux/reducers/PackageSlice";

export default function Home() {
  // const [name, Setname] = useState("libin");
  // console.log(name);


  return (
    <>

    {/* first page */}
      <div className="homepage">
        <div className="seconddiv">
          <div className="homediv">
            <h1>
              TRAVEL WITH ALL YOUR <br />
              MIGHT AND SOUL
            </h1>
            <p>Refreshes The Tour Other Beers Cannot Reach</p>
          </div>
        </div>
      </div>

{/* second page */}
      <Container fluid className="homepage2">
        <Row className="imgrow">
          <Col className="imgstyle">
            <div className="alignimage">
              <img src="/images/tripsquad.jpeg" alt="" className="imgsize2" />
            </div>
          </Col>
          <Col className="textstyle">
            <h5>ABOUT US</h5>
            <h1>
              WE ARE PROFESSIONAL <br /> PLANNERS FOR YOUR TRIP
            </h1>
            <h6>
              We never compromise the quality of service so we can <br />
              deliver the most satisfactory experience.To be honest,we <br />
              believe in the philosophy of happiness as the core of <br />
              prosperity !
            </h6>
            <br />
            <h6>
              we are best known for fun trips with family,we are <br />
              celebrated professional for business tours.
            </h6>
            <br />

            <h6>
              <span>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              </span>{" "}
              All places and activities are carefully picked by us. <br />
              <br />
              <span>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              </span>{" "}
              98% packages competition rates. <br />
              <br />
              <span>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              </span>{" "}
              We are award winnging agency <br />
              <br />
              <span>
                <i
                  class="bi bi-check-circle-fill"
                  style={{ color: "green" }}
                ></i>
              </span>{" "}
              Trusted by more than 50000 customers. <br />
              <br />
            </h6>

            <button className="readmorebutton">
              READ MORE{" "}
              <span>
                <i class="bi bi-arrow-right"></i>
              </span>
            </button>
          </Col>
        </Row>
      </Container>
      <br />

{/* third page */}
      <Container className="discoverpage">
        <div className="distext">
          <h5 className="disstart">Discover</h5>
          <br />
          <h2>Discover Weekly</h2>
        </div>

        <Row className="disrow">
          <div class="carddis1">
            <img
              src="./images/portugal.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
          </div>

          <div class="carddis2">
            <img
              src="./images/switzerland.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
          </div>

          <div class="carddis3">
            <img
              src="./images/poland.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
          </div>

          <div class="carddis4">
            <img
              src="./images/argentina.jpeg"
              alt=""
              height={"100%"}
              width={"100%"}
            />
          </div>
        </Row>
      </Container>

{/* fourth page */}
      <div className="populardest">
        <h2 className="textpop">
          <span className="spanpop">Popular</span> Destinations
        </h2>
        <p>
          This tour invites you to a pleasant day where you <br />
          can watch Green Canyon and relax with
        </p>
      </div>
      <Container fluid>
        <div className="poprowstart">
          <div className="one">
            <span className="europe">Europe</span>
          </div>
          <div className="two">
            <span className="asia">Asia</span>
          </div>
          <div className="three">
            <span className="america">America</span>
          </div>
          <div className="four">
            <span className="africa">Africa</span>
          </div>
        </div>
      </Container>

{/* fifth page */}
      <div className="topdes">
        <h2>
          Top <span style={{ color: "yellowgreen" }}>Destination</span> For{" "}
          <span style={{ color: "yellowgreen" }}>Your</span> Next <br />
          Vacation
        </h2>
      </div>

      <Container className="topDestination">
        <div className="Topbox">
          <div className="italy">
            <h6 style={{fontSize:'20px'}}>Popular US National Parks</h6>
            <div className="placename">
            <img
              src="./images/italy.jpeg"
              alt=""
              height={"230px"}
              width={"255px"}
            />{" "}
            </div>
            <div className="z-indexitaly">Italy</div>
            
          </div>

          <div className="australia">
            <h6 style={{fontSize:'20px'}}>Our base Camp Tours</h6>
            <div className="placename">
            <img
              src="./images/australia.jpeg"
              alt=""
              height={"230px"}
              width={"255px"}
            />{" "}
          </div>
            <div className="z-indexitaly">Australia</div>
            </div>

          <div className="england">
            <h6 style={{fontSize:'20px'}}>Wild Safari</h6>
            <div className="placename">
            <img
              src="./images/england.jpeg"
              alt=""
              height={"230px"}
              width={"255px"}
            />{" "}
          </div>
          <div className="z-indexitaly"><span className="spaneng">England</span></div>
  
          </div>

          <div className="us">
            <h6 style={{fontSize:'20px'}}>Hiking & Backpacking Tours</h6>
            <div className="placename">
            <img
              src="./images/US.jpg"
              alt=""
              height={"230px"}
              width={"255px"}
            />{" "}
           </div>
            <div className="z-indexitaly"> United States</div>

          </div>
        </div>
      </Container>

{/* sixth page */}
      <Container fluid>
        <div className="plans">
          <h5 style={{ color: "green" }}>OUR BENEFITS LIST</h5>
          <br />
          <h2>
            WHY YOU SHOULD CHOOSE <br /> OUR TRIPGO ?
          </h2>
        </div>

        <div className="planimage">
          <div className="soloimg1">
            <img
              src="./images/solo1.jpeg"
              alt=""
              style={{ borderRadius: "200px" }}
              height={"150px"}
              width={"150px"}
            />{" "}
            <br />
            <br />
            <h6>BEST PRICE GUARANTCE</h6>
            <p>
              Our price is designed for long trips and <br />
              can be purchased while your are travelling
            </p>
          </div>

          <div className="soloimg2">
            <img
              src="./images/solo2.jpeg"
              alt=""
              style={{ borderRadius: "200px" }}
              height={"150px"}
              width={"150px"}
            />{" "}
            <br />
            <br />
            <h6>EASY & QUICK BOOKING</h6>
            <p>
              It all happens online, we recommended <br />
              everything to your vision
            </p>
          </div>

          <div className="soloimg3">
            <img
              src="./images/solo3.jpeg"
              alt=""
              style={{ borderRadius: "200px" }}
              height={"150px"}
              width={"150px"}
            />{" "}
            <br />
            <br />
            <h6>EXPERIENCED GUIDE</h6>
            <p>
              Booking the right hotel is one of the most
              <br />
              important factors
            </p>
          </div>
        </div>

        <div className="letsplan">
          <button className="planbut">LETS PLAN YOUR TRIP</button>
        </div>
      </Container>

{/* seventh page */}
      <Container fluid className="fdbkstart">
        <div className="feedbackpage">
          <div className="col1feedback">
            <h6>TESTIMONIALS</h6>
            <h3>
              Our Valueable Customers <br /> Awesome Feedback
            </h3>
            <p>
              You'll Look A Little Lovelier Each Day With Fabulous PinkAmazing.{" "}
              <br />
              Everyone Loves Tour.
            </p>
            <div className="fdbk">
              <div className="">
                <img
                  src="./images/brazil.jpeg"
                  alt=""
                  height={"100px"}
                  width={"100px"}
                  className="reviewimg"
                /> <br />
              </div>
              <div className="textfdbkclass">
                <span className="spanquat">"</span>I recently returned from the enchanted Europe<br />
                Tour,and i couldn't be more thrilled with the <br />experience! From start to finish,everything was <br />
                perfectly organized.
                <span className="spanquat">"</span>
              </div>
            </div>

            <ul class="wrapper">
              <li class="icon black">
                {/* <span class="tooltip">Left</span> */}
                <span>
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-double-left"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>
              <li class="icon black">
                {/* <span class="tooltip">Right</span> */}
                <span>
                  <svg
                    viewBox="0 0 16 16"
                    class="bi bi-chevron-double-right"
                    fill="currentColor"
                    height="16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>

          <div className="feedbackimg">
            <div class="cardd">
              <img
                src="./images/feedback.jpeg"
                alt=""
                height={"300px"}
                width={"100%"}
                className="cardimg"
              />
            </div>
            {/* <img
              src="./images/portugal.jpeg"
              alt=""
              height={"150px"}
              width={"110px"}
              className="smallimg"
            /> */}
          </div>
        </div>
      </Container>

{/* eightth page */}
      <Container fluid className="getincontainer">
        <div className="getinpage">
          <div className="getinclass">
          <div className="getintouch">
            <h3 className="geth3">Get In Touch</h3>
            <br />
            <input type="text" placeholder="Full Name" className="getinput1" />
            <input
              type="text"
              placeholder="Email Address"
              className="getinput2"
            />
            <br />
            <br />
            <input
              type="text"
              placeholder="Your Message"
              className="getinput3"
            />
            <br />
            <br />
            <div className="getbutton">
              <button className="getbutt">Submit</button>
            </div>
          </div>
          
        </div>
       
        </div>
        <div className="gettext">
          Because in the end,you won't remember the time you <br />
          spent working in the office or mowing your own lawn.Climb <br />
          that goddaman mountain.
        </div>
      </Container>

     
    </>
  );
}
