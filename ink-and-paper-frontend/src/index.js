import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLogin from "./Components/FormLogin";
import Dashboard from "./Components/Dashboard";
import UserPage from './Components/UserPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="FormLogin" element={<FormLogin />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="UserPage" element={<UserPage />} />
        </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
