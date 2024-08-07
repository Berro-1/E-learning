// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function Signup() {
    const [credentials, setCredentials] = useState({ email: '', password: '', username: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signup Credentials:', credentials);
        // Add your signup logic here
        // navigate('/some-path-on-success'); // Optionally navigate on successful signup
    };

    return (
        <div className="auth-form">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" name="username" value={credentials.username} onChange={handleChange} placeholder="Username" required />
                <input type="email" name="email" value={credentials.email} onChange={handleChange} placeholder="Email" required />
                <input type="password" name="password" value={credentials.password} onChange={handleChange} placeholder="Password" required />
                <button type="submit">Sign Up</button>
                <p>Already have an account? <span className="link" onClick={() => navigate('/')}>Login</span></p>
            </form>
        </div>
    );
}

export default Signup;
