import axios from 'axios';
import {
  withdrawalRequestStart,
  withdrawalRequestSuccess,
  withdrawalRequestFailure,
} from './withdrawalSlice';

export const requestWithdrawal = (userId, classId, reason) => async (dispatch) => {
  dispatch(withdrawalRequestStart());
  try {
    await axios.post('http://localhost:4000/api/withdrawals/request', {
      student: userId,
      course: classId,
      reason,
    });
    dispatch(withdrawalRequestSuccess());
  } catch (error) {
    dispatch(withdrawalRequestFailure(error.message));
  }
};
