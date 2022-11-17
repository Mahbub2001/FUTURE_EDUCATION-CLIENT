import React from "react";
import { Link } from "react-router-dom";
import "./Faq.Module.css";

const Faq = () => {
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
          <h1>FAQ</h1>
          <h1>
            <Link to="/">Home</Link> {">"} FAQ
          </h1>
        </div>
      </div>
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Frequently Asked Question
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about our education system and what can
              do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Am I eligible to apply here?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I get full funded?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  When will apply process start?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  What score need in GRE exam?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I take more than one major course?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  Can I get financial aid?
                </summary>

                <span>
                  To be eligible for admission to graduate study at Stanford:{" "}
                  <br />
                  <li>
                    {" "}
                    You must hold, or expect to hold before enrollment at future
                    education, a U.S. bachelor's degree or its international
                    equivalent from a college or university of recognized
                    standing.
                  </li>
                  <li>
                    You must meet the university's minimum requirements for
                    English proficiency.
                  </li>
                </span>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
