import React from "react";
import { Link } from "react-router-dom";
import "./Card.Module.css";
import { FaArrowRight } from "react-icons/fa";

const CourseCard = ({ data }) => {
  const { id, course_name, date, hours, details, instructor, img, price } =
    data;
  return (
    <div className="border card-container flex flex-col justify-between bg-gray-100">
      <div>
        <img className="h-64 " src={img} alt="" />
      </div>
      <div className="p-3">
        <small>Time : {hours} hours</small>
        <p className="text-right text-gray-600">Instructor : {instructor}</p>
        <div>
          <h3 className="text-2xl mt-2 font-bold text-gray-700">
            {course_name}
          </h3>
          <p className="mt-5 text-gray-500">
            {" "}
            {details.length > 150 ? (
              <>
                {details.slice(0, 150) + "..."}{" "}
                <Link className="text-orange-500" to="">
                  Read More
                </Link>
              </>
            ) : (
              details
            )}
          </p>
        </div>
        <div className="flex items-center gap-2 text-red-700">
          <Link to={`/courses-details/${data.id}`}><button className="mt-5">Apply Now</button></Link>
          <FaArrowRight className="mt-5" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
