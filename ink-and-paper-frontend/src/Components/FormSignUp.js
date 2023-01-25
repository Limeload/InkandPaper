import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

function FormSignUp({ users, setUsers }) {
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
    fetch(`http://localhost:9292/users`, {
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
    <Form onSubmit={handleSubmit} className="App-login">
      <Form.Field>
        <label>Create Username</label>
        <input
          onChange={handleChange}
          name="username"
          placeholder="Type your username here"
        />
      </Form.Field>
      <Form.Field>
        <label>Create password</label>
        <input onChange={handleChange} name="password" placeholder="Password" />
      </Form.Field>
      <Form.Field>
        <Checkbox label="I agree to the Terms and Conditions" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default FormSignUp;
