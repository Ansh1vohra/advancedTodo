import TaskInput from "../components/TaskInput"
import TaskList from "../components/TaskList"
import LeftSideMenu from "../components/LeftSideMenu"

export default function Task({ isMenuOpen, setIsMenuOpen }) {
    return(
        <div className="d-flex">
            {isMenuOpen && 
            <LeftSideMenu setIsMenuOpen={setIsMenuOpen} />
            }
            <div className="container">
                <TaskInput />
                <TaskList />
            </div>
        </div>
    )
}