import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import "./App.css";
import logo from "../logo.png";
import FormSignUp from "./FormSignUp";
import { useNavigate } from "react-router-dom";

function FormLogin({ users, setUsers }) {
  const [showForm, setShowForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  function handleClickForm() {
    setShowForm(!showForm);
  }

  function handleSubmit(e) {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
       if (account && account.password === password) {
           setAuthenticated(true)
           localStorage.setItem("authenticated", true);
            navigate("/Dashboard");
     }
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} className="App-login">
        <img src={logo} alt="logo" />
        <Form.Field>
          <label>Username</label>
          <input name="Username" onChange={(e) => setUsername(e.target.value)} placeholder=" Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="Password" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
        <h3> or </h3>,
        <Button onClick={handleClickForm} className="Button">
          Sign Up instead
        </Button>
        {showForm ? <FormSignUp users={users} setUsers={setUsers} /> : null}
      </Form>
    </div>
  );
}

export default FormLogin;
