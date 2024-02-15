import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import "./Contact.css"
const Contact = () => {
  const [name, setName] = useState("");
  const [Email, setEMail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ss7sm3n", "template_8a1m5us", form.current, {
        publicKey: "Cl4SUgOrHQ2AEMTqA",
      })
      .then(
        () => {
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    navigate("/");
  };

  return (
    <>
      <div className="contact">
        
        <iframe
        className="helo"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d447.13298554911796!2d87.27174276392877!3d26.48384237028222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1708008068866!5m2!1sen!2snp"
          width="600"
          height="450"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="hello">
          <h1 className="cont">Contact Me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input
            className="username"
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            /><br></br>
            <label>Email</label>
            <input
              className="email"
              type="email"
              name="user_email"
              value={Email}
              onChange={(e) => setEMail(e.target.value)}
            /><br></br>
            <label className="mess">Message</label>
            <textarea
            className="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            /><br></br>
            <input type="submit" value="Send"className="send" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
