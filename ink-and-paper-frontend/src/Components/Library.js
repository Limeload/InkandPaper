import React, { useEffect, useState } from "react";
import Book from "./Book";

function Library() {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  return (
    <div class="container">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
}

export default Library;
