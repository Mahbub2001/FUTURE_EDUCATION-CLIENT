import React, { useEffect, useState } from "react";
import "./Footer.Module.css";
import image from "../../../assets/bg_footer_top.png";
import icon from "../../../assets/icons/writeicon.png";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp, FaLocationArrow, FaPhone } from "react-icons/fa";
import {GoMail} from "react-icons/go"

const Footer = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://educational-website-server-kappa.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div className="mt-20">
      <div className="footer-main relative">
        <img className="absolute bottom-0" src={image} alt="" />
        <div className="container text-white">
          <form>
            <input
              type="text"
              className="text-white outline-none mt-10 bg-transparent border-b-2 border-gray-600 h-16 "
              placeholder="Email Address"
            />
            <p>To Recieve Our Updates Via E-mail</p>
          </form>
        </div>
        <div className="text-white container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center mt-10 gap-5">
          <div className="relative">
            <h5>ABOUT US</h5>
            <img className="absolute -left-6 top-5" src={icon} alt="" />
            <p className="mt-6">
              On my way to where the air is sweet. Can you tell me how to get
              how to get to Sesame Street! The first mate and his Skipper too
              will do their very best to make the others comfortable
            </p>
            <div className="grid grid-cols-4 mt-2">
              <FaFacebook className="circle-icon2 hover:bg-red-600 hover:border-none hover:fill-white" />
              <FaTwitter className="circle-icon2 hover:bg-red-600 hover:border-none hover:fill-white" />
              <FaLinkedin className="circle-icon2 hover:bg-red-600 hover:border-none hover:fill-white" />
              <FaWhatsapp className="circle-icon2 hover:bg-red-600 hover:border-none hover:fill-white" />
            </div>
          </div>
          <div className="relative">
            <h5>LATEST POST</h5>
            <img className="absolute -left-1 top-5" src={icon} alt="" />
            <div className="mt-5">
              {news.slice(0, 3).map((data) => {
                return (
                  <div key={data.id} className="flex mb-1 items-center gap-2">
                    <div>
                      <img className="w-20" src={data.img} alt="" />
                    </div>
                    <div>
                      <small>{data.details.slice(0, 30)}.</small>
                      <br />
                      <small>{data.date}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <h5>LATEST TWEETS</h5>
            <img className="absolute left-3 top-5" src={icon} alt="" />
            <div className="mt-5">
            <p>Educamus is one of the excellent university template</p>
            <small>1 HOURS AGO</small>
            <p className="mt-10">Educamus is one of the excellent university template</p>
            <small>1 HOURS AGO</small>
            </div>
          </div>
          <div className="relative">
            <h5>CONTACT INFO</h5>
            <img className="absolute left-3 top-5" src={icon} alt="" />
            <div className="mt-8">
              <div className="flex gap-3 items-center">
                <FaLocationArrow/>
                Thanapara, Lalmonirhat <br />
                Rangpur divission,<br />
                Bangladesh
              </div>
              <div className="flex items-center gap-3 mt-5">
                <FaPhone/>
                4849 234 23443
              </div>
              <div className="flex gap-3 mt-5 items-center">
                <GoMail/>
                imahbubturza@gmail.com
              </div>
            </div>
          </div>
        </div>
      <h5 className="text-center text-white mt-10">Copyright by Mahbub Ahmed Turza @2022</h5>
      </div>
    </div>
  );
};

export default Footer;
