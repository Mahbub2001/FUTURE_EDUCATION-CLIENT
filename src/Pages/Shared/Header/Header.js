import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.Module.css";
import photo from "../../../assets/prof-photo/header_bottom_photo.png";

const Header = () => {
  return (
    <div className="header text-white relative">
      <div className="header-main">
        <div className="header-value absolute">
          <h1 className="text-4xl mb-4 ">
            EDUCATION IS THE KEY TO YOUR <br /> SUCCESS
          </h1>
          <p>
            Love exciting and new. Come aboard were expecting you. Love life's{" "}
            <br /> sweetest reward Let it flow it floats back to you. Texas tea.
            A man is born <br /> he's a man of means you knew.
          </p>
          <div className="flex gap-5 mt-5">
            <NavLink className="shadow-lg border rounded-lg px-5 py-2 hover:border-red-600 hover:bg-red-600">
              <button>LEARN MORE</button>
            </NavLink>
            <NavLink className="shadow-lg border rounded-lg px-5 py-2 hover:border-red-600 hover:bg-red-600">
              <button>APPLY NOW</button>
            </NavLink>
          </div>
        </div>
        <img className="absolute" src={photo} alt="" />
      </div>
    </div>
  );
};

export default Header;
