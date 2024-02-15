import React from "react";
import "./Project.css";
import ecommerce from "../assets/ecommerce.png";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TfiWorld } from "react-icons/tfi";
const Project = () => {
  return (
    <>
      <div className="mainbar">
        <div className="fbar">
          <h4>Ecommerce Website</h4>
          <img src={ecommerce} alt="photo" className="ecommerce" />
          <h5 className="note">
            A simple Ecommerce Webapplication used react js and added add to
            cart function.
          </h5>
          <button className="demo">
            <Link to="https://sameercommerce.netlify.app/" target="_blank">
              <TfiWorld /> see live demo
            </Link>
          </button>
        </div>
        <div className="fbar">
          <h4>Blog application</h4>
          <img src={ecommerce} alt="photo" className="ecommerce" />
          <h5 className="note2">
            A Fullstack webapplication used react js,mongoose,node,express and
            multer. Also add authentication and authorization for user to give
            access.
          </h5>
        </div>
      </div>
    </>
  );
};

export default Project;
