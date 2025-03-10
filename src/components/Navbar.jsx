import React from 'react';
import Home from "./Home.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import {Link, NavLink} from "react-router";

const Navbar = () => {
    return (
        <div>
            <ul className='flex px-8 justify-center gap-x-6'>
                <li>
                    <NavLink to="/"  className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about"  className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard"  className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-gray-600"}>Dashboard</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;