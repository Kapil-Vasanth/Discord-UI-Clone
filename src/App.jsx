import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Hero from './components/Hero';
import Dashboard from './components/dashboard';
import FriendLayout from "./components/FriendLayout";
import ServerLayout from "./components/ServerLayout";
import Server from "./components/Server";
import AddFriendPage from "./pages/AddFriendPage";

import ErrorPage from "./error-page";
import Channel from "./pages/Channel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="server" element={<ServerLayout />} >
            <Route index path="channels" element={<Channel />} />
          </Route>
          <Route path="friend" element={<FriendLayout />}>
            <Route index path="me" element={<AddFriendPage />} />
            <Route path="stage-discovery" element={<h1>Hello Stage</h1>} />
            <Route path="nitro" element={<h1>Hello Nitro</h1>} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
