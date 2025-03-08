import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTask, toggleComplete } from "../redux/taskSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`list-group-item d-flex justify-content-between ${
            task.completed ? "text-decoration-line-through" : ""
          }`}
        >
          {task.text}
          <div>
            <button
              className="btn btn-success btn-sm me-2"
              onClick={() => dispatch(toggleComplete(task.id))}
            >
              ✓
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => dispatch(removeTask(task.id))}
            >
              ✕
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
