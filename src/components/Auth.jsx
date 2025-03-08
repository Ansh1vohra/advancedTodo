import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div>
      {isAuthenticated ? (
        <button className="btn btn-danger" onClick={() => dispatch(logout())}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={() => dispatch(login())}>
          Login
        </button>
      )}
    </div>
  );
};

export default Auth;
