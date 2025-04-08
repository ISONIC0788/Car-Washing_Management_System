import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu as MenuIcon, Close as CloseIcon, DarkMode, LightMode } from "@mui/icons-material";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-xl ring-gray-900/5 p-4 border border-gray-300 dark:border-gray-700 rounded-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-xl font-semibold text-gray-900 dark:text-white">
        Car+Wash Ms
      </Link>
  
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="text-gray-900 dark:text-white hover:text-indigo-500">Home</Link>
      <a
  href="https://ebedcarwashingmanagementsystem.vercel.app/"
  className="text-gray-900 dark:text-white hover:text-indigo-500" target="_blank" rel="noopener noreferrer">
  Visit GitHub
</a>
        <Link to="/Booking" className="text-gray-900 dark:text-white hover:text-indigo-500">Booking</Link>
      </div>
  
      {/* Theme Toggle Button */}
      <button
        className="ml-4 p-2 rounded-full border border-gray-400 dark:border-gray-600 transition duration-300"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <LightMode className="w-6 h-6 text-yellow-400" /> : <DarkMode className="w-6 h-6 text-gray-900 dark:text-white" />}
      </button>
  
      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-900 dark:text-white ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm px-4 pt-2 pb-4 shadow-lg border border-gray-300 dark:border-gray-700 rounded-lg">
        <Link to="/" className="block text-gray-900 dark:text-white py-2 hover:text-indigo-500">Home</Link>
        <Link to="/dashboard" className="block text-gray-900 dark:text-white py-2 hover:text-indigo-500">DashBoard</Link>
        <Link to="/booking" className="block text-gray-900 dark:text-white py-2 hover:text-indigo-500">Booking</Link>
      </div>
    )}
  </nav>
  
  );
}

export default NavBar;
