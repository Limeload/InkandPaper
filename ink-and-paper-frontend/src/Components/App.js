import React from "react";
import "./App.css";
import FormLogin from "./FormLogin";
import { useState, useEffect } from "react";
import Library from "./Library";
import UserPage from "./UserPage";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  return (
    <div className="App">
      <FormLogin users={users} setUsers={setUsers} />

      <Library />
    </div>
  );
}

export default App;
