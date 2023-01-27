import React from "react";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";
import Library from "./Library";
import { Button } from "semantic-ui-react";
import FormLogin from "./FormLogin";
import UserPage from "./UserPage";
import Container from 'react-bootstrap/Container';


function Dashboard(){
    const [authenticated, setauthenticated] = useState(null);
    const [logout, setLogout] = useState([]);
    const [donate, setDonate] = useState(false);

    function onLogOut(){
     setLogout(logout.concat(<Navigate replace to="/FormLogin" />))
    }

    function onDonate(){
      setDonate(!donate);
    }

    useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
    setauthenticated(loggedInUser);
    }
  }, []);

    if (!authenticated) {
    <Navigate replace to="/FormLogin" />
  } else {
    return (
    <div className="dashboard">
        <p>Welcome, to Ink and Paper Library! </p>
        <Button className="logout" onClick={onLogOut}>Logout</Button>
        {logout}

        <Button className="donate" onClick={onDonate}>Donate a book!</Button>
         {donate ? <UserPage /> : null}
        <Container className="d-flex justify-content-evenly" >
        <Library />
        </Container>
    </div>
  );
  }
}

export default Dashboard;
