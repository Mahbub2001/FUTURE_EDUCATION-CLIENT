import React, { useState } from "react";
import "./Blogs.Module.css";
import { data } from "./BlogApi";
import Blog from "./Blog";
import image from '../../assets/stanford-oval.jpg'
import { Link } from "react-router-dom";

const News = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <div>
      <div className="picture">
        <h1 className="text-center pt-60 text-white font-bold text-4xl">Blogs</h1>
      </div>
      <div className="bg-red-600 h-16 flex font-semibold text-2xl">
        <div className="container flex justify-between items-center text-white ">
          <h1>About Us</h1>
          <h1><Link to="/">Home</Link> {">"} About us</h1>
        </div>
      </div>
      <div>
          <div className="accordion">
            <h3>Increase Your Knowledge</h3>
            <section className="info">
              {questions.map((question) => (
                <Blog key={question.id} {...question} />
              ))}
            </section>
          </div>
        </div>
    </div>
  );
};

export default News;
