import React, { useEffect, useState } from "react";
import Book from "./Book";
import UserPage from "./UserPage";

function Library() {
  const [books, setBooks] = useState([]);
  console.log(books);
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  /*
 function handleDeleteClick() {
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(data => console.log(data));
      change console.log to setBooks
  }
*/
  /*
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/books/${book.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user_id,
      }),
    })
      .then((r) => r.json())
      .then((data) => setBooks(data));
  }
*/
  return (
    <div class="container">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
      <UserPage books={books} setBooks={setBooks} />
    </div>
  );
}

export default Library;
