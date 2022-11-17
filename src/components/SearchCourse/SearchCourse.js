import React from "react";
import { Parallax } from "react-parallax";
import image1 from "../../assets/bg_course_search.jpg";
import "./SearchCourse.Module.css";

const SearchCourse = () => {
  return (
    <div>
      <Parallax strength={800} bgImage={image1}>
        <div className="content">
          <div className="text-content text-white text-center mt-36 ">
            <h2 className=" font-bold text-5xl">Search For Courses</h2>
            <p className="text-1xl mt-5">Fill the fields to seek for courses</p>
            <div className="container mt-20 con">
              <form>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 justify-center items-center">
                  <div className="text-black">
                    <select
                      className=" text-gray-500 rounded-md text-center w-48 h-10"
                      name="Category"
                      id="Category"
                    >
                      <option value="Category">Category</option>
                      <option value="web-devlop">Web Development</option>
                      <option value="competitive-programming">
                        Competitive Programming
                      </option>
                      <option value="app-development">App development</option>
                      <option value="cyber">Cyber Security</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className=" text-gray-500 rounded-md text-center w-48 h-10"
                      name="Category"
                      id="Category"
                    >
                      <option value="duration">Duration</option>
                      <option value="60">60hours</option>
                      <option value="70">70hours</option>
                      <option value="80">80hours</option>
                      <option value="90">90hours</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className=" text-gray-500 rounded-md text-center w-48 h-10"
                      name="Category"
                      id="Category"
                    >
                      <option value="level">Level</option>
                      <option value="udergraduate">Udergraduate</option>
                      <option value="postgraduate">Post Graduate</option>
                    </select>
                  </div>
                  <div>
                  <select
                      className=" text-gray-500 rounded-md text-center w-48 h-10"
                      name="Category"
                      id="Category"
                    >
                      <option value="Location">Location</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Chattragram">Chattragram</option>
                    </select>
                  </div>
                  <div>
                    <input type="text" placeholder="Keywords" className="text-center rounded-md w-48 h-10 text-gray-500" />
                  </div>
                </div>
                <button className="mt-20 bg-red-600 px-6 py-2 rounded-md hover:text-red-700 hover:bg-white hover:border-2 hover:border-red-700">SEARCH</button>
              </form>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default SearchCourse;
