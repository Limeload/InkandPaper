import React, { useState } from "react";
import { Card, Image, Button } from 'semantic-ui-react'

import "./App.css";
function Book({ book }) {
  const [isRead, setRead] = useState(true);
  const [borrow, setBorrowed] = useState(true);

  return (
    <Card.Group centered>
    <Card>
      <Card.Content>
        <Card.Header>{book.title}</Card.Header>
        <Card.Meta>{book.genre}</Card.Meta>
        <Image src={book.image_URL} alt={book.title} />
        <br />
        <Card.Meta>{book.author}</Card.Meta>
      </Card.Content>
      { isRead ? (
    <Button primary onClick={() =>setRead(false)}>New</Button> ) : (
      <Button primary>Read</Button>
    )}
    { borrow ? (
      <Button secondary onClick={() => setBorrowed(false)}>Borrow this book!</Button> ) : (
    <Button secondary>Borrowed</Button>)}
    </Card>
  </Card.Group>
  );
}

export default Book;
