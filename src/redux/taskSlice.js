import { createSlice } from "@reduxjs/toolkit";

// Safe retrieval of tasks from localStorage
const loadTasks = () => {
  try {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : []; // Ensure valid JSON
  } catch (error) {
    console.error("Error parsing tasks from localStorage", error);
    return []; // Fallback to empty array if error occurs
  }
};

const initialState = {
  tasks: loadTasks(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Store in localStorage
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update storage
    },
    toggleComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks)); // Update storage
      }
    },
    clearTasks: (state) => {
      state.tasks = [];
      localStorage.removeItem("tasks"); // Clear from storage
    },
  },
});

export const { addTask, removeTask, toggleComplete, clearTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
