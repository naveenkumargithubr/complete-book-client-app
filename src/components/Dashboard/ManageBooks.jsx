import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
const ManageBooks = () => {
  //
  //state updatation
  const [allBooks, setAllbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/all-books")
      .then((res) => res.json())
      .then((data) => setAllbooks(data));
  }, []);

  //
  // delete the books
  const onDeleteBook = async (id) => {
    // console.log(id);
    const deleteUrl = `http://localhost:3005/books/${id}`;
    const options = {
      method: "DELETE",
    };
    const response = await fetch(deleteUrl, options);
    const data = await response.json();
    if (response.ok == true) {
      alert("book deleted successfully");
      setAllbooks(data);
    } else {
      alert("something went wrong");
    }
  };

  return (
    <div className="Manage-container">
      <h2>Manage Books</h2>
      {/* table for book data */}
      <div className="overflow-x-auto lg:w-[1180px]">
        <Table>
          <Table.Head>
            <Table.HeadCell>No</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>AuthorName</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Prices</Table.HeadCell>
            <Table.HeadCell>
              <span>Edit or Manage</span>
            </Table.HeadCell>
          </Table.Head>
          {allBooks.map((book, index) => (
            <Table.Body className="divide-y" key={book._id}>
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </Table.Cell>
                <Table.Cell>{book.bookTitle}</Table.Cell>
                <Table.Cell>{book.authorName}</Table.Cell>
                <Table.Cell>{book.category}</Table.Cell>
                <Table.Cell>$15.00</Table.Cell>
                <Table.Cell>
                  <div className="flex align-center gap-3">
                    <Link
                      to={`/admin/dashboard/editbooks/${book._id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </Link>
                    <button
                      //  It's a way of defining an anonymous function inline.
                      onClick={() => onDeleteBook(book._id)}
                      className="bg-blue-600 px-4 py-1 font-semibold text-white rounded hover:bg-black"
                    >
                      Delete
                    </button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageBooks;
