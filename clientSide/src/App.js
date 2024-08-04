import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./component/home/Home";
import Login from "./component/login/Login";
import Register from "./component/register/Register";
import Createblog from "./component/createblog/Createblog";
import Viewblog from "./component/viewblog/Viewblog";
import Header from "./component/header/Header";
import Viewsingle from "./component/viewsingle/Viewsingle";
import Editblog from "./component/editblog/Editblog";
import Trip from "./component/trip/Trip";
import Createtrip from "./component/createtrip/Createtrip";
import Tripedit from "./component/tripedit/Tripedit";
import Tripsingleview from "./component/tripsingleview/Tripsingleview";
import Destination from "./component/destination/Destination";
import Createdestination from "./component/createdestination/Createdestination";
import Profile from "./component/profile/Profile";
import About from "./component/about/About";
import Footer from "./component/footer/Footer";

function App() {
  
  return (
    <>
      <>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createblog" element={<Createblog />} />
            <Route path="/viewblog" element={<Viewblog />} />
            <Route path="/viewsingle/:id" element={<Viewsingle />} />
            <Route path="/editblog/:id" element={<Editblog />} />
            <Route path="/trip" element={<Trip />} />
            <Route path="/createtrip" element={<Createtrip />} />
            <Route path="/tripedit/:id" element={<Tripedit />} />
            <Route path="/tripsingleview/:id" element={<Tripsingleview />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/createdestination" element={<Createdestination />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </Router>
      </>
    </>
  );
}

export default App;
