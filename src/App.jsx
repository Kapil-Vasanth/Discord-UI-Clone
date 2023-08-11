import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Hero from './components/Hero';
import Dashboard from './components/dashboard';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Hero} exact/>
          <Route path="/register" Component={Register}  exact/>
          <Route path="/login" Component={Login} exact />    
          <Route path="/dashboard" Component={Dashboard} exact />    
          
        
      </Routes>
  </BrowserRouter>
  );
}

export default App;
