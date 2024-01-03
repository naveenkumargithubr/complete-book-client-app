import React from "react";
import { useLoaderData } from "react-router-dom";
import "./SingleBook.css";

const SingleBook = () => {
  const {
    _id,
    bookTitle,
    imageUrl,
    authorName,
    bookDescription,
    category,
    bookPdfUrl,
  } = useLoaderData();
  return (
    <div className="singleBook-container">
      <img src={imageUrl} alt="" className="single-img" />
      <div className="singleBook-desc">
        <h1>{bookTitle}</h1>
        <h3>
          <span>wriiten by</span> <br />
          {authorName}
        </h3>
        <p>{bookDescription}</p>
        <div className="genres">
          <h4>Genres: {category}</h4>
          <a href={bookPdfUrl}>Url: bookpdfurl</a>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
