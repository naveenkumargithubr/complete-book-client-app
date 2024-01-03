import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaBlog, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Link to="/" className="books">
          <FaBlog className="inline-block" />
          Books
        </Link>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <Link to="/blog">
          <li>Blog</li>
        </Link>

        <li>Offices</li>
        <Link to="/about">
          <li>About</li>
        </Link>

        <li>Contact</li>
      </ul>
      <div>
        <h3 className="follow-us">Follow Us</h3>
      </div>

      <div className="footer-icons">
        <div className="icons-container">
          <FaWhatsapp />
        </div>

        <div className="icons-container">
          <FaFacebookF />
        </div>

        <div className="icons-container">
          <FaXTwitter />
        </div>
      </div>

      <div className="footer-copyright">
        <hr />
        <p>Copyright @2023 - All Right Reserved by naveen</p>
      </div>
    </div>
  );
};

export default Footer;
