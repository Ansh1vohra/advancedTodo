import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleComplete } from "../redux/taskSlice";
import { MdStar, MdStarBorder } from "react-icons/md";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Separate tasks into pending and completed
  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list-container">
      {/* Pending Tasks */}
      <ul className="list-group mb-4">
        {pendingTasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex align-items-center justify-content-between p-3 m-2 rounded border-bottom"
          >
            <input 
              type="checkbox" 
              onChange={() => dispatch(toggleComplete(task.id))}
            />
            <span className="flex-grow-1 ms-2">{task.text}</span>
            <MdStarBorder size={24} className="text-secondary cursor-pointer" />
          </li>
        ))}
      </ul>

      {/* Completed Tasks */}
      <ul className="list-group">
        <p className="p-2">Completed Tasks:</p>
        {completedTasks.map((task) => (
          <li
            key={task.id}
            className="list-group-item d-flex align-items-center justify-content-between p-3 rounded border-bottom text-decoration-line-through text-muted"
          >
            <input 
              type="checkbox" 
              checked 
              onChange={() => dispatch(toggleComplete(task.id))}
            />
            <span className="flex-grow-1 ms-2">{task.text}</span>
            <MdStarBorder size={24} className="text-secondary cursor-pointer" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
