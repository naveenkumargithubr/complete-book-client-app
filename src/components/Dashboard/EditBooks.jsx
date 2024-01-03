import React, { useState, useEffect } from "react";
import { useActionData, useLoaderData, useParams } from "react-router-dom";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";

const EditBooks = () => {
  const { id } = useParams();
  const {
    _id,
    bookTitle,
    imageUrl,
    authorName,
    bookDescription,
    category,
    bookPdfUrl,
  } = useLoaderData();
  const bookCategories = [
    "Best Horror",
    "Thriller",
    "Nonfiction",
    "Debut novel",
    "Fantacy",
    "Adult",
    "History",
    "Self-help",
    "Bibliography",
    "Autobiography",
    "Horror",
    "Programming",
    "Science fiction",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  //state updation
  const [selectedbook, setSelectedBook] = useState("");

  //this function is iterate of book categories and target the category name values
  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBook(event.target.value);
  };

  const onSubmitForm = async (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObject = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      bookDescription,
      bookPdfUrl,
    };

    // console.log( updateBookObject);
    //update book data to database
    const postUrl = `http://localhost:3005/books/${id}`;
    const options = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateBookObject),
    };

    const response = await fetch(postUrl, options);
    const data = await response.json();
    if (response.ok === true) {
      alert("Book uploaded successfully");
    } else {
      alert("book upload failed");
    }
  };

  return (
    <div className="upload-conatiaer">
      <h2>Update the Book data</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={onSubmitForm}
      >
        <div className="flex gap-8">
          {/* first row */}
          <div className="lg:w-1/2">
            <div className="label-head my-2">
              <Label htmlFor="bookTitle" value="book title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Enter book title"
              required
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="label-head my-2">
              <Label
                htmlFor="authorName"
                value="author name"
                className="text-red-500"
              />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Enter author name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="label-head my-2">
              <Label htmlFor="bookTitle" value="Image Url" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name="imageUrl"
              placeholder="Enter book image"
              required
              defaultValue={imageUrl}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="label-head my-2">
              <Label htmlFor="inputState" value="Book category" />
            </div>

            <select
              id="inputState"
              name="categoryName"
              className="catogory-style"
              value={selectedbook}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* decsription */}
        <div>
          <div className="label-head my-2">
            <Label htmlFor="bookDescription" value="Book description" />
          </div>
          <Textarea
            className="py-5 p-5 w-full"
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book description"
            required
            rows={6}
            defaultValue={bookDescription}
          />
        </div>

        {/* Book pdf Link */}
        <div>
          <div className="label-head my-2">
            <Label htmlFor="bookPdfUrl" value="Book pdf url" />
          </div>
          <TextInput
            type="text"
            id="bookPdfUrl"
            name="bookPdfUrl"
            required
            placeholder="Paste your book url here"
            defaultValue={bookPdfUrl}
          />
        </div>
        {/* button */}

        <button type="submit" className="submit-btn">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBooks;
