import React, { useState, useEffect } from "react";
import Header from "../admin/Header";

const StaffList = () => {
  return (
    <div>
      <Header />
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
