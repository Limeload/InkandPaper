import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function UserPage() {
  const [form, setForm] = useState({});
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((resp) => resp.json())
      .then((data) => setUsers([data, ...users]));
  }

  return (
    <div>
      <h1>Welcome {user.first_name}</h1>
      <h2>Current Checkouts</h2>
      {user.books.map((book) => (
        <p>{book.title}</p>
      ))}
      <h2>Donate a Book</h2>
      <Form onSubmit={handleSubmit} className="App-login">
        <Form.Field>
          <label>Book Title</label>
          <input
            onChange={handleChange}
            name="title"
            placeholder="Type your title here"
          />
        </Form.Field>
        <Form.Field>
          <label>Author of your book</label>
          <input
            onChange={handleChange}
            name="author"
            placeholder="Author here"
          />
        </Form.Field>
        <Form.Field>
          <label>Genre of your book</label>
          <input
            onChange={handleChange}
            name="genre"
            placeholder="Genre here"
          />
        </Form.Field>

        <Button type="submit">Donate</Button>
      </Form>
    </div>
  );
}

export default UserPage;
