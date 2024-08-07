import axios from 'axios';
import {
  fetchEnrolledClassesStart,
  fetchEnrolledClassesSuccess,
  fetchEnrolledClassesFailure,
  enrollClassStart,
  enrollClassSuccess,
  enrollClassFailure
} from './enrollmentSlice';

export const fetchEnrolledClasses = (userId) => async (dispatch) => {
  dispatch(fetchEnrolledClassesStart());
  try {
    const response = await axios.get(`http://localhost:4000/api/enrollments/enrolled/${userId}`);
    dispatch(fetchEnrolledClassesSuccess(response.data));
  } catch (error) {
    dispatch(fetchEnrolledClassesFailure(error.message));
  }
};

export const enrollClass = (userId, classId) => async (dispatch) => {
  dispatch(enrollClassStart());
  try {
    const response = await axios.post(`http://localhost:4000/api/enrollments/enroll`, {
      userId,
      classId
    });
    dispatch(enrollClassSuccess(response.data));
  } catch (error) {
    dispatch(enrollClassFailure(error.message));
  }
};
