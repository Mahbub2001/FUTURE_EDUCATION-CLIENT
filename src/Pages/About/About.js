import React from "react";
import "./About.Module.css";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import icon2 from "../../assets/icons/logo.png";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-page">
        <div className="pt-56">
          <h1 className="text-center text-4xl text-white font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="bg-red-600 h-16 flex font-semibold text-2xl">
        <div className="container flex justify-between items-center text-white ">
          <h1>About Us</h1>
          <h1><Link to="/">Home</Link> {">"} About us</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 mb-40">
        <div className="px-20 div-1  down-section flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-3 font-semibold">
            Welcome To Our University{" "}
          </h1>
          <p>
            when the odds are against him and their dangers work to do. You bet
            your life Speed Racer he will see it through. Well we're movin' on
            up to the east side. To a deluxe apartment in the sky. So this is
            the tale of our castaways
          </p>
        </div>
        <div className="div-2 down-section  flex flex-col justify-center items-center gap-16 px-20 ">
          <div className="flex gap-8 items-center">
            <div>
              <FaGraduationCap className="icons" />
            </div>
            <div>
              <h1>ASSOCIATES'S DEGREE</h1>
              <p className="mt-5">
                You would see the biggest gift would be from me and the card
                attached would say thank you for being a friend.
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center">
            <div>
            <FaUserGraduate className="icons" />
            </div>
            <div>
              <h1>BACHELOR'S DEGREE</h1>
              <p className="mt-5">
                On your mark get set and go now. Got a dream and we just know
                now we're gonna make our dream come true.
              </p>
            </div>
          </div>
          <div className="flex gap-8 items-center ">
            <div>
              <FaUserGraduate className="icons" />
            </div>
            <div>
              <h1>MASTER'S DEGREE</h1>
              <p className="mt-5">
                Just sit right back and you'll hear a tale a tale of a fateful
                trip that started from this tropic port aboard this tiny ship.
              </p>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-28">
            <ChooseSection/>
        </div>
    </div>
  );
};

export default About;
