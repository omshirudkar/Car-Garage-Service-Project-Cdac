import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function AssignTask() {
  const [staffList] = useState([
    "John Doe",
    "Jane Smith",
    "Mark Wilson",
    "Alice Johnson",
  ]);

  const [task, setTask] = useState(""); // Task description
  const [assignedStaff, setAssignedStaff] = useState(""); // Assigned staff member
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  const assignTask = () => {
    if (!task || !assignedStaff) {
      alert("Please fill in both the task and the staff member.");
      return;
    }
    alert(`Task "${task}" has been assigned to ${assignedStaff}`);
    setTask(""); // Clear task input
    setAssignedStaff(""); // Clear staff selection
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div style={styles.wrapper}>
      {/* Button to toggle sidebar */}
      <button
        className="btn btn-primary"
        onClick={toggleSidebar}
        style={styles.toggleButton}
      >
        {isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}
      </button>

      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{
          ...styles.sidebar,
          ...(isSidebarOpen ? styles.sidebarOpen : {}),
        }}
      >
        <div className="sidebar-header">
          <h3 style={styles.heading}>Admin Dashboard</h3>
          <button onClick={toggleSidebar} style={styles.closeButton}>
            ×
          </button>
        </div>
        <ul className="list-unstyled">
          <li>
            <Link to="/admin-dashboard" style={styles.link}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/staff" style={styles.link}>
              Staff Management
            </Link>
          </li>
          <li>
            <Link to="/assign-task" style={styles.link}>
              Assign Tasks
            </Link>
          </li>
          <li>
            <Link to="/accept-request" style={styles.link}>
              Accept Requests
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <h2>Assign Tasks to Staff</h2>
        <div className="mb-3">
          <label className="form-label">Task Description</label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task description"
            style={styles.input}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Assign to Staff</label>
          <select
            className="form-select"
            value={assignedStaff}
            onChange={(e) => setAssignedStaff(e.target.value)}
            style={styles.input}
          >
            <option value="">Select a staff member</option>
            {staffList.map((staff, index) => (
              <option key={index} value={staff}>
                {staff}
              </option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary"
          onClick={assignTask}
          style={styles.button}
        >
          Assign Task
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex", // Using Flexbox to align sidebar and main content side-by-side
    height: "100vh", // Ensure full screen height
  },
  toggleButton: {
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 1050, // Ensure the button appears above everything else
  },
  mainContent: {
    flex: 1, // Main content should take up the remaining space
    padding: "20px",
    marginLeft: "0px", // Adjust margin for open sidebar
    transition: "margin-left 0.3s ease", // Smooth transition for content shift
  },
  input: {
    marginBottom: "15px",
  },
  button: {
    marginTop: "10px",
  },
  sidebar: {
    position: "fixed",
    top: 0,
    left: "-250px", // Sidebar is initially hidden off-screen
    width: "250px",
    height: "100%",
    backgroundColor: "#333",
    color: "white",
    paddingTop: "20px",
    paddingLeft: "20px",
    transition: "transform 0.3s ease", // Smooth transition when opening/closing
    zIndex: 1000,
  },
  sidebarOpen: {
    transform: "translateX(250px)", // Sidebar slides in when open
  },
  heading: {
    color: "#fff",
    marginBottom: "20px",
  },
  link: {
    color: "white",
    display: "block",
    padding: "10px",
    textDecoration: "none",
    marginBottom: "10px",
    transition: "background-color 0.3s",
  },
  closeButton: {
    color: "#fff",
    fontSize: "30px",
    background: "transparent",
    border: "none",
    position: "absolute",
    right: "10px",
    top: "10px",
  },
};
