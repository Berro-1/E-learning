import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">E-learn</Link>
      <div className="nav-links">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <button onClick={handleLogout} className="nav-item logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
