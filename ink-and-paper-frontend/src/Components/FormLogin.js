import { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { Button, Form } from "semantic-ui-react";
import FormSignUp from "./FormSignUp";
import { useNavigate } from "react-router-dom";
import logo from "../logo.png";
import "./App.css";

function FormLogin(){
  const [showForm, setShowForm] = useState(false);

  function handleClickForm() {
    setShowForm(!showForm);
  }

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

const [username, setusername] = useState("");
const navigate = useNavigate();
const [password, setpassword] = useState("");
const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

function handleSubmit(e){
  e.preventDefault()
  const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
       setauthenticated(true)
       localStorage.setItem("authenticated", true);
       navigate("/Dashboard");
        }};

return (
<div className="App">
<Form onSubmit={handleSubmit} className="App-login">
        <img src={logo} alt="logo" />
        <Form.Field>
          <label>Username</label>
          <input name="Username" onChange={(e) => setusername(e.target.value)} placeholder=" Username" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="Password" onChange={(e) => setpassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
        <h3> or </h3>,
        <Button onClick={handleClickForm} className="Button">
          Sign Up instead
        </Button>
        {showForm ? <FormSignUp users={users} setUsers={setUsers} /> : null}
      </Form>
</div>
)
};


export default FormLogin;
