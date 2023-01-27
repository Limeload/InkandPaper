import React, { useEffect, useState } from "react";
import Book from "./Book";
import Row from 'react-bootstrap/Row';


function Library() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);


  function handleRemove(id) {
    const newBook = books.filter((book) => book.id !== id);
    setBooks(newBook);
  }

  function handleUpdate(updated) {
    const updatedBook = books.map((book) => book.id === updated.id ? updated : book);
    setBooks(updatedBook);
  }

const cards = books.map((book) => (
  <Book book={book} handleRemove={handleRemove} onUpdate={handleUpdate} key={book.id} />
))
  return (

    <div class="container">
<Row xs={1} md={3} className="g-4">{cards}</Row>
    </div>
  );
}

export default Library;
