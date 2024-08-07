// src/redux/classes/classesActions.js

import axios from 'axios';
import {
  fetchClassesStart,
  fetchClassesSuccess,
  fetchClassesFailure,
  addClassSuccess,
} from './classesSlice';

export const fetchClasses = () => async (dispatch) => {
  dispatch(fetchClassesStart());
  try {
    const response = await axios.get('http://localhost:4000/api/classes');
    dispatch(fetchClassesSuccess(response.data));
  } catch (error) {
    dispatch(fetchClassesFailure(error.message));
  }
};

export const addClass = (classData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:4000/api/classes', classData);
    dispatch(addClassSuccess(response.data));
  } catch (error) {
    console.error("Failed to add class:", error);
  }
};
