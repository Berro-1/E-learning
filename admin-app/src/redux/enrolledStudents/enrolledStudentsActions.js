// src/redux/enrolledStudents/enrolledStudentsActions.js

import axios from 'axios';
import {
  fetchEnrolledStudentsStart,
  fetchEnrolledStudentsSuccess,
  fetchEnrolledStudentsFailure,

} from './enrolledStudentsSlice';


export const fetchEnrolledStudents = (courseId) => async (dispatch) => {
  dispatch(fetchEnrolledStudentsStart());
  try {
    const response = await axios.get(`http://localhost:4000/api/enrollments/course/${courseId}`);
    dispatch(fetchEnrolledStudentsSuccess(response.data));
  } catch (error) {
    dispatch(fetchEnrolledStudentsFailure(error.message));
  }
};