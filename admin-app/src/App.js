// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AddClass from './components/addClass';
import EnrolledStudents from './components/EnrolledStudents';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-class" element={<AddClass />} />
          <Route path="/enrolled-students" element={<EnrolledStudents />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
