import React from 'react'
import Header from '../admin/Header';

export default function AdminDash() {
  return (
      <>
          <Header/>
      <div className="dashboard">
        <h2>Welcome to Garage Admin Panel</h2>
        <p>Select an option from the sidebar to get started!</p>

        <style>
          {`
          .dashboard {
            text-align: center;
            padding: 50px;
            background-color: #ecf0f1;
            border-radius: 8px;
          }

          .dashboard h2 {
            margin-bottom: 20px;
          }

          .dashboard p {
            color: #7f8c8d;
          }
        `}
        </style>
      </div>
    </>
  );
}
