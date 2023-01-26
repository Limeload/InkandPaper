import React from "react";
import "./App.css";
function Book({ book }) {
  return (
    <div>
      <div class="content">
        <h4 class="book">
          {book.title}- {book.genre}
        </h4>
      </div>
      <div class="flap"></div>
    </div>
  );
}

export default Book;
