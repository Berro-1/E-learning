// src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/add-class">Add Class</Link>
          </li>
          <li>
            <Link to="/enrolled-students">Enrolled Students</Link>
          </li>
          <li>
            <Link to="/withdrawals">Withdrawals</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
