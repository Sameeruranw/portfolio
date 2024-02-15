import React from "react";
import sameer from "../assets/sameer.jpg";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="contain">
      <div className="left">
        <h4 className="hel"> Hello i'm</h4>
        <h1 className="name">sameer uranw</h1>
        <h2 className="info">FullStack WebDeveloper</h2>
        <div className="detail">
          <MdOutlineEmail />{" "}
          <span className="inbox">sameeruranw81@gmail.com</span>
          <br></br>
          <br></br>
          <FaPhoneAlt /> <span className="inbox">9826301622</span>
          <br></br>
          <br></br>
          <FaMapMarkerAlt /> <span className="inbox">Biratnagar,Nepal</span>
        </div>
        <div className="links">
          <Link to="https://www.facebook.com/sameeruranw23/" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://github.com/Sameeruranw" target="_blank">
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/sameer-uranw-689194270/"
            target="_blank"
          >
            <FaLinkedin />
          </Link>
          <Link
            to="https://www.instagram.com/sa_m_eer_23/"
            target="_blank"
          >
              <FaInstagramSquare />
          </Link>
        
        </div>
      </div>

      <div className="right">
        <img className="pic" src={sameer} alt="picture" height={500} />
      </div>
    </div>
  );
};

export default Home;
