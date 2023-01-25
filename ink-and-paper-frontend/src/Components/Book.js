import React from "react";

function Book({ book }) {
  return (
    <div>
      <div class="content">
        <h4>{book.title}</h4>
        <h5>{book.genre}</h5>
      </div>
      <div class="flap"></div>
    </div>
  );
}

export default Book;
