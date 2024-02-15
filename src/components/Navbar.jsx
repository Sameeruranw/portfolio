import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <Link to="/">
        <h1 className="logo">Sameer Uranw</h1>
        </Link>
        
        <div className="topnav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="Skills">Skills</Link>
            </li>
            <li>
             <Link to="https://sameeruranw.hashnode.dev/" target="_blank">Blog</Link>
            </li>
            <li>
              <Link to="Project">Project</Link>
            </li>
            <li>
              <Link to="Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
