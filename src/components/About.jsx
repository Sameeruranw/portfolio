import React from "react";
import coder from "../assets/coder.gif";
import { IoMdDownload } from "react-icons/io";
import "./About.css";
const About = () => {
  return (
    <div className="main">
      <img className="coder" src={coder} alt="coder image" width={500} />
      <div className="side">
        <h1 className="aboutme">About me</h1>
        <p className="description">
          Passionate full stack developer with expertise in front-end<br></br>
          technologies like HTML, CSS, JavaScript and react js and<br></br> back-end
          technologies like Node js, Express js,MongoDB<br></br>Saas and Next js. Always eager to
          learn and take on new <br></br>challenges in the tech world.
        </p>
          <div className="button">
            <button className="btn"><IoMdDownload/>Download CV</button>
            </div>    
      </div>
    
    </div>
  );
};

export default About;
