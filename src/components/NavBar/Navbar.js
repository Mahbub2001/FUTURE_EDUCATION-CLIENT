import React, { useContext, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import { FiToggleLeft } from "react-icons/fi";
import { FaToggleOn } from "react-icons/fa";
import { ThemeContext } from "../../hooks/ThemeContext";
import { AuthContext } from "../../hooks/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { user, logOut } = useContext(AuthContext);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="flex justify-center">
      <nav className="container absolute">
        <NavLink to="/" className="flex items-center">
          <img className="w-10" src={logo} alt="" />
          Future Education
        </NavLink>
        <div className="menu-icon mt-2.5" onClick={handleClick}>
          {clicked ? <FaBars /> : <FaBars />}
        </div>
        <ul className={clicked ? "menu-list" : "menu-list close"}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/courses">Courses</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/blogs">Blogs</NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/faq">FAQ</NavLink>{" "}
          </li>
          {user?.uid ? (
            <>
              <>
                <Tippy content={user.displayName}>
                  <li className="image-align">
                    <Link className="link11" to="/profile">
                      {user?.photoURL ? (
                        <img
                          className="h-10 w-10 rounded-full"
                          src={user?.photoURL}
                          alt=""
                        />
                      ) : (
                        <FaUser />
                      )}
                    </Link>
                  </li>
                </Tippy>
              </>
              <li onClick={handleLogOut} className="font-bold cursor-pointer text-red-700">
                Logout
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>{" "}
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>{" "}
              </li>
            </>
          )}
        </ul>
        <div className="absolute -mt-5">
          <div className="flex absolute items-center gap-1 left-48 top-6">
            <small>Light</small>
            <div onClick={handleTheme}>
              {darkMode ? (
                <FaToggleOn className="w-8 h-8 cursor-pointer" />
              ) : (
                <FiToggleLeft className="w-8 h-8 cursor-pointer" />
              )}
            </div>
            <small>Dark</small>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Header;
