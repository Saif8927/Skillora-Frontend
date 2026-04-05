import React from "react";
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your Skillora Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Saifurrahman</a>
        </p>
        <div className="social-links">
          <a href="">
            <AiFillFacebook />
          </a>
          <a href="">
            <BsTwitterX />
          </a>
          <a href="">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
