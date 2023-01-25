import React from "react";
import "./App.css";
import FormLogin from "./FormLogin";
import { useState, useEffect } from "react";
import Library from "./Library";
import UserPage from "./UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);
  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
      <Route exact path="/" element={<FormLogin users={users} setUsers={setUsers} />} />
      <Route exact path="/Dashboard" element={<Dashboard />} />
      </Routes>

      {/* <Routes>
      <Route exact path="/UserPage" element={<UserPage />} />
      </Routes>

      <Routes>
      <Route exact path="/Library" element={<Library />} />
      </Routes> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
