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

  const cards = books.map((book) => (
    <Book book={book} key={book.id} />
  ))

//  function handleDeleteClick() {
//     fetch(`http://localhost:9292/books/${book.id}`, {
//       method: "DELETE",
//     })
//       .then((r) => r.json())
//       .then(data => setBooks(data));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch(`http://localhost:9292/books/${book.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         user_id: user_id,
//       }),
//     })
//       .then((r) => r.json())
//       .then((data) => setBooks(data));
//   }

  return (
    <div class="container">
<Row xs={1} md={3} className="g-4">{cards}</Row>
    </div>
  );
}

export default Library;
