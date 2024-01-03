import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

import "./BestSellerBooks.css";
const BestSellerBooks = () => {
  //state updation
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data.slice(0, 4)));
  }, []);

  return (
    <div className="Favourite-container">
      <BookCard books={books} headline="Best Seller Books" />
    </div>
  );
};

export default BestSellerBooks;
