import axios from 'axios';
import {
  fetchFilesStart,
  fetchFilesSuccess,
  fetchFilesFailure,
} from './fileSlice';
import {jwtDecode} from 'jwt-decode';

export const fetchFilesByClass = (classId) => async (dispatch) => {
  dispatch(fetchFilesStart());
  try {
    const response = await axios.get(`http://localhost:4000/api/files/class/${classId}`);
    dispatch(fetchFilesSuccess(response.data));
  } catch (error) {
    dispatch(fetchFilesFailure(error.message));
  }
};

export const fetchEnrolledFiles = () => async (dispatch, getState) => {
  const token = localStorage.getItem('token');
  if (!token) return;
  
  const decodedToken = jwtDecode(token);
  const userId = decodedToken.id;
  const enrolledClasses = getState().enrollment.enrolledClasses;
  if (!enrolledClasses) return;

  dispatch(fetchFilesStart());
  try {
    const files = await Promise.all(
      enrolledClasses.map(async (classItem) => {
        const response = await axios.get(`http://localhost:4000/api/files/class/${classItem.classId._id}`);
        return response.data;
      })
    );
    const allFiles = files.flat();
    dispatch(fetchFilesSuccess(allFiles));
  } catch (error) {
    dispatch(fetchFilesFailure(error.message));
  }
};
