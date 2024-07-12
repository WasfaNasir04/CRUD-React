import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import RoleSwitcher from './components/RoleSwitcher';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <RoleSwitcher />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
