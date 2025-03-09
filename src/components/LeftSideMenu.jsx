import { logout } from "../redux/authSlice";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import "./LeftSideMenu.css";
import userImage from "../assets/user.jpg"; // Replace with your image path
import TaskChart from "../chart/TaskChart"; // ✅ Import TaskChart
import { useNavigate } from "react-router";

export default function LeftSideMenu({ setIsMenuOpen, setIsLoggedIn }) {
  const nav = useNavigate();
  const dispatch = useDispatch();

  return (
    <div id="leftMenu" className="p-4 rounded">
      <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
        <AiOutlineClose size={20} />
      </button>

      {/* User Profile */}
      <div className="profile-section text-center">
        <img src={userImage} alt="User" className="profile-img" />
        <p className="username">Hey, ABCD</p>
      </div>

      {/* Menu Options */}
      <div className="bg-light rounded">
        <ul className="list-unstyled mt-3 d-flex flex-column gap-2">
          <li className="cursor-pointer"><i className="bi bi-list-task"></i> All Tasks</li>
          <li className="cursor-pointer"><i className="bi bi-calendar-day"></i> Today</li>
          <li className="cursor-pointer"><i className="bi bi-star"></i> Important</li>
          <li className="cursor-pointer"><i className="bi bi-journal"></i> Planned</li>
          <li className="cursor-pointer"><i className="bi bi-person-check"></i> Assigned to me</li>
        </ul>
      </div>

      {/* Add List Option */}
      <div className="add-list">+ Add list</div>

      {/* Chart Section */}
      <div className="chart-section text-center">
        <h5>Task Progress</h5>
        <TaskChart /> {/* ✅ Replace Pie chart with TaskChart */}
      </div>

      {/* Logout Button */}
      <button className="btn btn-danger mt-4" onClick={() => {
        setIsLoggedIn(false);
        dispatch(logout());
        nav("/")
      }}>
        Log-out
      </button>
    </div>
  );
}
