import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import LeftSideMenu from "../components/LeftSideMenu";

export default function Task({ setIsLoggedIn, isMenuOpen, setIsMenuOpen, searchQuery }) {
  return (
    <div className="d-flex">
      {isMenuOpen && <LeftSideMenu setIsMenuOpen={setIsMenuOpen} setIsLoggedIn={setIsLoggedIn} />}
      <div className="container">
        <TaskInput />
        <TaskList searchQuery={searchQuery} />
      </div>
    </div>
  );
}
