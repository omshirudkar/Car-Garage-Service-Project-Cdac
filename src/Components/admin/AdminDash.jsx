import React from "react";
import AdminHeader from "./Header"; // Import the admin header
import Sidebar from "./Sidebar"; // Import sidebar for navigation

export default function AdminDash() {
  return (
    <div style={styles.wrapper}>
      <Sidebar /> {/* Sidebar navigation */}
      <div style={styles.contentArea}>
        <AdminHeader />
        <div style={styles.container}>
          <h2>Welcome to the Admin Dashboard</h2>
          <p>This is where you can manage garage operations and staff.</p>
          <div style={styles.card}>
            <h4>Garage Overview</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Garage Name</th>
                  <th>Status</th>
                  <th>Staff Assigned</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Garage A</td>
                  <td>Active</td>
                  <td>John, Jane</td>
                </tr>
                <tr>
                  <td>Garage B</td>
                  <td>Inactive</td>
                  <td>Mark</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
  },
  contentArea: {
    width: "80%",
    padding: "20px",
  },
  container: {
    padding: "20px",
  },
  card: {
    marginTop: "20px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
};
