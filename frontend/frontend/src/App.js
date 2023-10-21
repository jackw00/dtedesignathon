import React from 'react';
import Dashboard from './pages/Dashboard'; 
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        
      </Routes>
    </div>
  );
}

export default App;