import React from "react";
import "./GreatestTeacher.Module.css";
import prof1 from "../../assets/prof-photo/prof2.jpg"
import prof2 from "../../assets/prof-photo/prof1.jpg"
import prof3 from "../../assets/prof-photo/prof4.jpg"
import prof4 from "../../assets/prof-photo/prof3.jpg"

const GreatestTeacher = () => {
  return (
    <div className="container">
      <h1 className="text-5xl text-center mb-10">Our Best Teachers</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center items-center text-center gap-5">
        <div>
          <img src={prof1} alt="" />
          <div className="border-b-4 bg-slate-100 border-b-red-700">
            <h5>MARTIN GENDAYA</h5>
            <p className="text-red-900">Math Head</p>
          </div>
        </div>
        <div>
          <img src={prof2} alt="" />
          <div className="border-b-4 bg-slate-100 border-b-red-700">
            <h5>MARK HENRY</h5>
            <p className="text-red-900">Software Engineer</p>
          </div>
        </div>
        <div>
          <img src={prof3} alt="" />
          <div className="border-b-4 bg-slate-100 border-b-red-700">
            <h5>JESSICA MARTIN</h5>
            <p className="text-red-900">Fouder & Principle</p>
          </div>
        </div>
        <div>
          <img src={prof4} alt="" />
          <div className="border-b-4 bg-slate-100 border-b-red-700">
            <h5>LUCIFER ANDRO</h5>
            <p className="text-red-900">Englsih Head</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreatestTeacher;
