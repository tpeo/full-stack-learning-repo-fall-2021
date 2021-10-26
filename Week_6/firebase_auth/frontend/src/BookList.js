/**
 * src/BookList.js
 */
import React, { useEffect, useState } from "react";

export default function BookList() {
  //create state to store our book list
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function loadBooks() {
      //fetch the book list
      const request = await fetch("http://localhost:4000/books", {
        //use the authorization
        headers: {
          Authorization: "Bearer " + localStorage.getItem("@token"),
        },
      });

      const allBooks = await request.json();
      //set the book list on state
      setBooks(allBooks.books);
    }
    //invoke the function
    loadBooks();
  }, []);

  return (
    <div className="container">
      <h1>BookList</h1>
      {/* map the book list to show book name and image */}
      {books.map((book) => (
        <div key={book.id} className="booklist">
          <img className="image" alt={book} src={book.image} />
          <h3>{book.name}</h3>
        </div>
      ))}
    </div>
  );
}
