import axios from 'axios';
import { fetchClassesStart, fetchClassesSuccess, fetchClassesFailure } from './classesSlice';

export const fetchClasses = () => async (dispatch) => {
  dispatch(fetchClassesStart());
  try {
    const response = await axios.get(`http://localhost:4000/api/courses`);
    dispatch(fetchClassesSuccess(response.data));
  } catch (error) {
    dispatch(fetchClassesFailure(error.message));
  }
};
