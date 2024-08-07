// src/redux/classes/classesActions.js

import axios from 'axios';
import {
  fetchClassesStart,
  fetchClassesSuccess,
  fetchClassesFailure,
  addClassStart,
  addClassSuccess,
  addClassFailure,
  fetchInstructorsStart,
  fetchInstructorsSuccess,
  fetchInstructorsFailure
} from './classesSlice';

export const fetchClasses = () => async (dispatch) => {
  dispatch(fetchClassesStart());
  try {
    const response = await axios.get('http://localhost:4000/api/courses');
    dispatch(fetchClassesSuccess(response.data));
  } catch (error) {
    dispatch(fetchClassesFailure(error.message));
  }
};

export const addClass = (classData) => async (dispatch) => {
  dispatch(addClassStart());
  try {
    const response = await axios.post('http://localhost:4000/api/courses/add', classData);
    dispatch(addClassSuccess(response.data));
  } catch (error) {
    dispatch(addClassFailure(error.message));
  }
};

export const fetchInstructors = () => async (dispatch) => {
  dispatch(fetchInstructorsStart());
  try {
    const response = await axios.get('http://localhost:4000/api/courses/instructors');
    dispatch(fetchInstructorsSuccess(response.data));
  } catch (error) {
    dispatch(fetchInstructorsFailure(error.message));
  }
};
