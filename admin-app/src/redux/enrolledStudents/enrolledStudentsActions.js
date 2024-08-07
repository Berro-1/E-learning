// src/redux/enrolledStudents/enrolledStudentsActions.js

import axios from 'axios';
import {
  fetchEnrolledStudentsStart,
  fetchEnrolledStudentsSuccess,
  fetchEnrolledStudentsFailure,
} from './enrolledStudentsSlice';

export const fetchEnrolledStudents = (classId) => async (dispatch) => {
  dispatch(fetchEnrolledStudentsStart());
  try {
    const response = await axios.get(`http://localhost:4000/api/courses/${classId}/students`);
    dispatch(fetchEnrolledStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchEnrolledStudentsFailure(error.message));
  }
};
