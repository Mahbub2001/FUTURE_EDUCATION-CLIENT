import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/NavBar/Navbar";
import { ThemeContext } from "../../hooks/ThemeContext";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  return (
    <div className={darkMode ? 'bg-black text-white' : 'text-black'}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
