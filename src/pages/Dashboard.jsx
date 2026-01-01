import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Load tasks
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: task,
        status: "Todo",
      },
    ]);

    setTask("");
  };

  const updateStatus = (id, newStatus) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, status: newStatus } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>

      {/* Add Task */}
      <input
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>Add Task</button>

      {/* Task List */}
      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 && <p>No tasks yet</p>}

        {tasks.map((t) => (
          <div
            key={t.id}
            style={{
              background: "#020617",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <p><b>{t.title}</b></p>

            <select
              value={t.status}
              onChange={(e) =>
                updateStatus(t.id, e.target.value)
              }
            >
              <option>Todo</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>

            <button
              style={{ marginTop: "8px", background: "#dc2626" }}
              onClick={() => deleteTask(t.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <button
        style={{ marginTop: "20px", background: "#475569" }}
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
