import React from "react";
import {useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

function Dashboard () {
    const [authenticated, setAuthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem('authenticated');
        if (loggedInUser) {
            setAuthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated){
    return <Navigate replace to="/" />
    } else {
  return(
    <div>
        <p>Welcome to Ink and Paper Library!</p>
    </div>
  )
}}

export default Dashboard;
