import {Routes, Route } from "react-router-dom";
import Home from "./../pages/Home";
import About from "./../pages/About";
import Login from "./../pages/Login";
import Booking from "./../pages/Booking";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="booking" element={<Booking />} />
        </Routes>
    )
}
export default Routing;