import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import "./Shop.css";
const Shop = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="Shop-container">
      <h2>All books here</h2>
      <div className="grid-card">
        {books.map((book) => (
          <Card className="Shop-card-container">
            <img src={book.imageUrl} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="card-desc">
              Britain. The near-future. A right-wing government believes it has
              the answer to society’s ills — the Sanctity of Marriage Act,
            </p>
            <button className="buy-now">Buy now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
