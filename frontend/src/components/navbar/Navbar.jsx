// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'; // Assuming your styles are here

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-logo">AppName</Link>
            <div className="nav-links">
                <Link to="/dashboard" className="nav-item">Dashboard</Link>
                <Link to="/profile" className="nav-item">Profile</Link>
                <Link to="/login" className="nav-item">Login</Link>
                <Link to="/signup" className="nav-item">Signup</Link>
            </div>
        </nav>
    );
}

export default Navbar;
