import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Task from './pages/Task';
import Auth from "./pages/Auth";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [searchQuery, setSearchQuery] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && window.location.pathname === "/") {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header setIsMenuOpen={setIsMenuOpen} setSearchQuery={setSearchQuery} />
      <div className='p-2'>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
          <Route path="/login" element={<Auth />} />

          {/* Home Page (Protected Route) */}
          <Route 
            path="/home" 
            element={isAuthenticated ? <Task isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} searchQuery={searchQuery} /> : <Navigate to="/login" />} 
          />

          {/* 404 Handling */}
          <Route path="*" element={<Navigate to={isAuthenticated ? "/home" : "/login"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
