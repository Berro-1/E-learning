import axios from 'axios';
import {
  fetchWithdrawalsStart,
  fetchWithdrawalsSuccess,
  fetchWithdrawalsFailure,
  updateWithdrawalStart,
  updateWithdrawalSuccess,
  updateWithdrawalFailure,
} from './withdrawalsSlice';

export const fetchWithdrawals = () => async (dispatch) => {
  dispatch(fetchWithdrawalsStart());
  try {
    const response = await axios.get('http://localhost:4000/api/withdrawals');
    dispatch(fetchWithdrawalsSuccess(response.data));
  } catch (error) {
    dispatch(fetchWithdrawalsFailure(error.message));
  }
};

export const updateWithdrawalStatus = (id, status) => async (dispatch) => {
  dispatch(updateWithdrawalStart());
  try {
    await axios.post('http://localhost:4000/api/withdrawals/handle', { id, status });
    dispatch(updateWithdrawalSuccess({ id, status }));
  } catch (error) {
    dispatch(updateWithdrawalFailure(error.message));
  }
};
