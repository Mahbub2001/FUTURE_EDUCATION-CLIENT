import React from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import "./Courses.Module.css";
import CourseCard from "../../components/coursesCard/CourseCard";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Courses = () => {
  const dataCart = useLoaderData();
  return (
    <div>
      <div className="courses-container">
        <div className="pt-36">
          <h1 className="mt-20 text-white text-5xl font-bold text-center">
            Courses
          </h1>
        </div>
      </div>
      <div className="bg-red-600 h-16 flex font-semibold text-2xl">
        <div className="container flex justify-between items-center text-white ">
          <h1>Course</h1>
          <Pdf targetRef={ref} filename="Courses.pdf">
        {({ toPdf }) => <button className="text-sm hover:text-black" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
          <h1><Link to="/">Home</Link> {">"} Courses</h1>
        </div>
      </div>
      <div ref={ref} className="container mt-20">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-5 justify-center ">
          <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center gap-5 col-span-2 border-r-2 border-gray-900 pr-2">
            {dataCart.map((data) => (
              <CourseCard key={data.id} data={data}></CourseCard>
            ))}
          </div>
          <div>
            <h1 className="text-center text-3xl font-bold text-slate-600">
              Course Categories
            </h1>
            <div className="flex flex-col justify-center items-start pl-20 mt-10">
              {dataCart.map((data) => {
                return (
                  <div key={data.id} className="mb-4 hover:text-red-600">
                    <NavLink to={`/courses-details/${data.id}`}>{data.course_name}</NavLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
