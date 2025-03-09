import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Task from './pages/Task';
import Auth from "./pages/Auth";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} setSearchQuery={setSearchQuery} />
      <div className='p-2'>
        <Routes>
          {/* Show login first, then move to Task page */}
          <Route 
            path="/" 
            element={isLoggedIn ? <Navigate to="/home" /> : <Auth setIsLoggedIn={setIsLoggedIn} />} 
          />
          <Route 
            path="/home" 
            element={<Task isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setIsLoggedIn={setIsLoggedIn} searchQuery={searchQuery} />} 
          />
          {/* 404 Handling */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
