import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 dark:bg-gray-700 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white lg:text-2xl text-lg font-bold">
          <Link to="/" className="hover:underline">
            My Courses
          </Link>
        </div>
        <ul className="flex space-x-6 lg:text-lg text-md">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Course Listing
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-300">
              Student Dashboard
            </Link>
          </li>
        </ul>
        <button
          onClick={toggleDarkMode}
          className="text-white p-2 rounded-full focus:outline-none"
        >
          {darkMode ? <FaSun className="text-yellow-500" size={24} /> : <FaMoon className="text-blue-300" size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
