import React from "react";
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
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
          <Route path="/dashboard" Component={Dashboard}>    
            <Route path="/dashboard/me" Component={Login}/>
            <Route path="/dashboard/stage-discovery" Component={Dashboard}/>
            <Route path="/dashboard/add-friend" Component={Dashboard}/>
            <Route path="/dashboard/nitro" Component={Dashboard}/>
  
          </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
