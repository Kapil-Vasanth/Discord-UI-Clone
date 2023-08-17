import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Hero from './components/Hero';
import Dashboard from './components/dashboard';
import Friend from "./components/Friend";
import Server from "./components/Server";

import ErrorPage from "./error-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="server" element={<Server />} />
          <Route path="friend" element={<Friend />}>
            <Route index element={<Friend />} />
            <Route path="add-friend" element={<Friend />} />
            <Route path="stage-discovery" element={<Friend />} />
            <Route path="nitro" element={<Friend />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
