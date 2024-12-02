import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Garage Admin</div>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/staff">Staff</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
        </ul>
      </nav>

      <style>
        {`
          .header {
            background-color: #2c3e50;
            color: #fff;
            padding: 20px;
            text-align: center;
            font-size: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .header .logo {
            font-weight: bold;
          }

          .header nav ul {
            list-style: none;
            display: flex;
            gap: 20px;
          }

          .header nav ul li {
            display: inline;
          }

          .header nav ul li a {
            color: #ecf0f1;
            text-decoration: none;
            font-size: 16px;
          }

          .header nav ul li a:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
