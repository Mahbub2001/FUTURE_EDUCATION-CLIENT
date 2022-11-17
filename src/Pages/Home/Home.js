import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import CourseCard from "../../components/coursesCard/CourseCard";
import GreatestTeacher from "../../components/GratestTeachers/GreatestTeacher";
import LatestCourse from "../../components/LatestCourses/LatestCourse";
import SearchCourse from "../../components/SearchCourse/SearchCourse";
import Testimonial from "../../components/Testimonial/Testimonial";
import { ThemeContext } from "../../hooks/ThemeContext";
import Header from "../Shared/Header/Header";
import "./Home.Module.css";

const Home = () => {
  const data = useLoaderData();

  const {darkMode} = useContext(ThemeContext);


  return (
    <div className={darkMode ? 'bg-black text-white' : 'text-black'}>
      <div>
        <Header />
      </div>
      <div className="container pt-28 ">
        <h1 className="text-center text-5xl text-slate-700 font-bold">
          Courses That We Offer
        </h1>
        <p className="text-center mt-3 text-1xl text-violet-400">
          Check our main courses and coachings
        </p>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-5">
          {data.slice(0, 6).map((p) => (
            <CourseCard data={p} key={p.id} />
          ))}
        </div>
      </div>
      <div className="mt-28 ">
        <SearchCourse />
      </div>
      <div className="mt-28">
        <ChooseSection />
      </div>
      <div className="mt-28">
        <LatestCourse />
      </div>
      <div className="mt-28">
        <GreatestTeacher />
      </div>
      <div className="mt-28">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
