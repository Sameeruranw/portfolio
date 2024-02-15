import React from "react";
import "./Skills.css";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import js from "../assets/js.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import express from "../assets/express.png";
import sass from "../assets/sass.png";
import postman from "../assets/postman.jpg"
const Skills = () => {
  return (
    <>
      <h1 className="sk">My Skills</h1>
      <div className="skills">
        <div>
          <h2 style={{ color: "darkblue" }}>My Skills and Experience</h2>
          <br></br>
          
          <p style={{paddingTop:"40px"}}>
            Passionate full stack developer with expertise in front-end<br></br>
            technologies like HTML, CSS, JavaScript and react js and<br></br>{" "}
            back-end technologies like Node js, Express js,MongoDB<br></br>Saas
            and Next js. Always eager to learn and take on new <br></br>
            challenges in the tech world.
          </p>
        </div>

        <div className="helo">
          <img className="hello" src={html} height={50} width={100} alt="image" />
          <img className="hello" src={css} height={50} width={100} alt="image"/>
          <img className="hello" src={js} height={50} width={100} alt="image"/>
        </div>
      </div>
    </>
  );
};

export default Skills;
