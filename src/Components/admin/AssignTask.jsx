import React, { useState } from "react";

export default function AssignTask() {
  const [task, setTask] = useState("");
  const [assignedStaff, setAssignedStaff] = useState("");

  const assignTask = () => {
    alert(`Task "${task}" has been assigned to ${assignedStaff}`);
  };

  return (
    <div style={styles.container}>
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
        <input
          type="text"
          className="form-control"
          value={assignedStaff}
          onChange={(e) => setAssignedStaff(e.target.value)}
          placeholder="Enter staff name"
          style={styles.input}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={assignTask}
        style={styles.button}
      >
        Assign Task
      </button>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  input: {
    marginBottom: "15px",
  },
  button: {
    marginTop: "10px",
  },
};
