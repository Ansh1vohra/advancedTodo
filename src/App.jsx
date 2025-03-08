import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Auth from "./components/Auth";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  // Redirect to home if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <div className='p-2'>
        <Routes>
          {/* Login Page */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Auth />} />

          {/* Home Page (Protected Route) */}
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <>
                  <TaskInput />
                  <TaskList />
                </>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
