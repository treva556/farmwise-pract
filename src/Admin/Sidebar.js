import React from "react";
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-green-600 min-h-screen w-56 rounded-r-3xl overflow-hidden">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
      </div>
      <ul className="flex flex-col py-4">
        <li>
          <Link to="/dashboard" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-white-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-home"></i></span>
            <span className="text-sm font-medium">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/pending" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-white-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-white-400"><i className="bx bx-message"></i></span>
            <span className="text-sm font-medium">Pending</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-user"></i></span>
            <span className="text-sm font-medium">Profile</span>
          </Link>
        </li>
        <li>
          <Link to="/notifications" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
            <span className="text-sm font-medium">Notifications</span>
            <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
          </Link>
        </li>
        <li>
          <Link to="/logout" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
            <span className="text-sm font-medium">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;