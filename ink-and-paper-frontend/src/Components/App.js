import React from "react";
import "./App.css"
import FormLogin from "./FormLogin";
import {useState, useEffect } from 'react';
import FormSignUp from "./FormSignUp";

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
        fetch("http://localhost:9292/users")
          .then((res) => res.json())
          .then((setUsers))
      }, []);
  return (
    <div className="App">
   <FormLogin users={users} setUsers={setUsers} />
    </div>
  );
}

export default App;
