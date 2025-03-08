import { logout } from "../redux/authSlice"
import { useDispatch } from "react-redux"
import "./LeftSideMenu.css"
import { AiOutlineClose } from "react-icons/ai";

export default function LeftSideMenu({setIsMenuOpen}) {
  const dispatch = useDispatch();

  return (
    <>
      <div id="leftMenu" className="p-4 rounded bg-success-subtle text-black">
        <button className="bg-none border-none" onClick={()=>{setIsMenuOpen(false)}}><AiOutlineClose size={20} /></button>
        <p>Hello User!</p>
        <div className="bg-light rounded">
          <ul className="list-unstyled mt-3 d-flex flex-column gap-2">
            <li className="cursor-pointer">All Tasks</li>
            <li className="cursor-pointer">Today</li>
            <li className="cursor-pointer">Important</li>
            <li className="cursor-pointer">Planned</li>
            <li className="cursor-pointer">Assigned to me</li>
          </ul>
        </div>
        <button className="btn btn-danger mt-4" onClick={() => dispatch(logout())}>
          Log-out
        </button>
      </div>
    </>
  )
}