import React from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TaskChart = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  // Count completed and pending tasks
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.length - completedTasks;

  const data = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [completedTasks, pendingTasks],
        backgroundColor: ["#4CAF50", "#FF5733"], // Green for completed, red for pending
        hoverBackgroundColor: ["#45A049", "#E74C3C"],
      },
    ],
  };

  return (
    <div style={{ width: "220px", margin: "auto" }}>
      <Pie data={data} />
    </div>
  );
};

export default TaskChart;
