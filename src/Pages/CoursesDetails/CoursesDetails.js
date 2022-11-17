import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import CheckOutPage from "../CheckOutPage/CheckOutPage";
import "./CourseDetails.Module.css";

const CoursesDetails = () => {
  const data = useLoaderData();
  const {id} = data;

  return (
    <div className="mt-28 container">
      <div className="flex flex-col justify-center items-center mb-10">
        <div>
          <img className="img" src={data.img} alt="" />
        </div>
        <div className="course_details mt-10 text-center">
          <h1 className="text-4xl font-bold text-slate-700">
            {data.course_name}
          </h1>
          <div className="flex justify-between">
            <p>
              <span className="font-semibold">Course Time :</span> {data.hours}
              hours
            </p>
            <p>
              <span className="font-semibold">Course Instructor :</span>{" "}
              {data.instructor}
            </p>
          </div>
          <p className="mt-10 text-left">
            <span className="font-bold text-3xl">
              Course Content : <br />
            </span>{" "}
            {data.details}
          </p>
          <p className="text-left mt-10">
            <span className="font-bold text-3xl">What Will You Learn</span>{" "}
            <br />
            {data.sub_details}{" "}
          </p>
          <p className="text-left mt-7">
            <span className="font-semibold">Price : </span>${data.price}
          </p>
        </div>
      </div>
      <Link to={`/checkoutpage/${id}`}>
        {" "}
        <button
          type="button"
          className="text-white bg-[#2557D6] hover:bg-[#2557D6]/90 focus:ring-4 focus:ring-[#2557D6]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#2557D6]/50 mr-2 mb-2"
        >
          For Premium Check out now!
        </button>
      </Link>
    </div>
  );
};

export default CoursesDetails;
