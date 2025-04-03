

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div>
 <footer className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm shadow-xl ring-gray-900/5 p-6 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Footer links */}
        <div className="text-gray-900 dark:text-white mb-4 md:mb-0">
          <Link to="/" className="hover:text-indigo-500">Home</Link>
          <span className="mx-4">|</span>
          <Link to="/dashboard" className="hover:text-indigo-500">Dashboard</Link>
          <span className="mx-4">|</span>
          <Link to="/Booking" className="hover:text-indigo-500">Booking</Link>
        </div>

        {/* Right side: Social media icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-gray-900 dark:text-white hover:text-indigo-500 w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-900 dark:text-white hover:text-indigo-500 w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-gray-900 dark:text-white hover:text-indigo-500 w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-900 dark:text-white hover:text-indigo-500 w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-gray-900 dark:text-white text-sm mt-4 md:mt-0">
          <p>&copy; {new Date().getFullYear()} Car+Wash Ms. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Footer
