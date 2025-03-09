import React from "react";
import { useDispatch } from "react-redux";
import { login} from "../redux/authSlice";
import "./Auth.css";

const Auth = ({setIsLoggedIn}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <form className="d-flex flex-column m-auto wisd gap-3 bg-success-subtle p-4 rounded my-4 text-black">
        <h3>Sample Form</h3>
        <p>(Enter anything in username and password as of now.)</p>
        <input className="form-control p-2" type="text" name="username" id="uname" placeholder="Enter User Name:" />
        <input className="form-control p-2" type="text" name="password" id="password" placeholder="Enter Password:" />
        <button className="btn btn-success p-2" onClick={() =>{
          setIsLoggedIn(true);
          dispatch(login())
        }
           }>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
