import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <p>
        Goodreads is the world's largest site for readers and book
        recommendations. Our mission is to help people find and share books they
        love. If you're looking for a place to discover a great book or to
        discuss your favorite books with a community of readers, you've found
        the right place!
      </p>

      <Link to="https://en.wikipedia.org/wiki/Goodreads">
        <h1>To know more about the goodreads click here...</h1>
      </Link>
    </div>
  );
};

export default About;
