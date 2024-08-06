import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, signupStart, signupSuccess, signupFailure } from './authSlice';
import { useNavigate } from 'react-router-dom';
// Login action creator
export const loginUser = (userData) => async (dispatch) => {
  dispatch(loginStart());
  try {
    
    const response = await axios.post('http://localhost:4000/api/auth/login', userData, {
    });
    dispatch(loginSuccess(response.data));
    console.log(response.data);
    
    localStorage.setItem('token', response?.data.token);
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || error.message || "Login failed"));
  }
};

// Signup action creator
export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupStart());
  try {
    const response = await axios.post('http://localhost:4000/api/auth/signup', userData);
    dispatch(signupSuccess(response.data));
  } catch (error) {
    dispatch(signupFailure(error.response?.data?.message || error.message || "Signup failed"));
  }
};
