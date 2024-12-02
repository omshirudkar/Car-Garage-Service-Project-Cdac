import React, { useState, useEffect } from "react";
import axios from "axios";

const StaffList = () => {
  const [staffList, setStaffList] = useState([]);
  const [staffName, setStaffName] = useState("");

  // Fetching staff data from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/staff")
      .then((response) => setStaffList(response.data))
      .catch((error) => console.log(error));
  }, []);

  // Handle adding a new staff member
  const handleAddStaff = () => {
    axios
      .post("http://localhost:8080/api/staff", { name: staffName })
      .then((response) => {
        setStaffList([...staffList, response.data]);
        setStaffName("");
      })
      .catch((error) => console.log(error));
  };

  // Handle deleting a staff member
  const handleDeleteStaff = (id) => {
    axios
      .delete(`http://localhost:8080/api/staff/${id}`)
      .then(() => setStaffList(staffList.filter((staff) => staff.id !== id)))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Staff Management</h2>
      <input
        type="text"
        placeholder="Enter staff name"
        value={staffName}
        onChange={(e) => setStaffName(e.target.value)}
      />
      <button onClick={handleAddStaff}>Add Staff</button>

      <ul>
        {staffList.map((staff) => (
          <li key={staff.id}>
            {staff.name}
            <button onClick={() => handleDeleteStaff(staff.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
