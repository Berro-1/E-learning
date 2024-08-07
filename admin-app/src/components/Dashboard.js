// src/components/Dashboard.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from '../redux/classes/classesActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { classes, loading, error } = useSelector((state) => state.classes);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <p>Loading classes...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
