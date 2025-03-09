import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";
import { v4 as uuidv4 } from "uuid";
import { MdArrowDropDown,MdNotifications, MdRestore, MdCalendarToday } from "react-icons/md";
import "./TaskInput.css";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTask({ id: uuidv4(), text: task, completed: false }));
    setTask("");
  };

  return (
    <>
      <div>
        <div className="d-flex gap-2 align-items-center">
          <span>To Do</span>
          <MdArrowDropDown />
        </div>
        <hr />
        <div className="backg p-3 rounded mb-3">
          <input
            type="text"
            className="taskip mb-2"
            placeholder="Add a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <br />
          <div className="d-flex justify-content-between align-items-center">
            <ul className="d-flex gap-2 list-unstyled p-2">
              <li className="cursor-pointer">
                <MdNotifications size={24} title="Reminder" />
              </li>
              <li className="cursor-pointer">
                <MdRestore size={24} title="Undo" />
              </li>
              <li className="cursor-pointer">
                <MdCalendarToday size={24} title="Calendar" />
              </li>
            </ul>
            <button className="btn btn-success" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskInput;
