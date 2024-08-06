import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome, {user ? user.name : 'User'}!</h1>
      <p>This is your dashboard.</p>
    </div>
  );
};

export default Dashboard;
