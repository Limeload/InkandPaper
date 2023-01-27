import React, { useState } from "react";
import { Card, Image, Button } from 'semantic-ui-react'

import "./App.css";
function Book({book, handleRemove, onUpdate,}) {
  const {id, title, genre, author, image_URL, likes = 0} = book
  const [isRead, setRead] = useState(true);
  const [borrow, setBorrowed] = useState(true);

  function handleDeleteClick() {
    fetch(`http://localhost:9292/books/${id}`, {
      method: "DELETE",
    })
      handleRemove(id);
  }

  const updateLikesObj = {
    likes: book.likes + 1,
  };

  function handleLikes(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/books/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateLikesObj),
        })
          .then((r) => r.json())
          .then(onUpdate);
      }

  return (
    <Card.Group centered>
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{genre}</Card.Meta>
        <Image src={image_URL} alt={title} />
        <br />
        <Card.Meta>{author}</Card.Meta>
      </Card.Content>
      { isRead ? (
    <Button primary onClick={() =>setRead(false)}>New</Button> ) : (
      <Button primary>Read</Button>
    )}
    { borrow ? (
      <Button secondary onClick={() => setBorrowed(false)}>Borrow this book!</Button> ) : (
    <Button secondary>Borrowed</Button>)}
    <Button onClick={handleDeleteClick}>Remove</Button>
    <Button onClick={handleLikes}> ♥ {likes} </Button>
    </Card>
  </Card.Group>
  );
}

export default Book;
