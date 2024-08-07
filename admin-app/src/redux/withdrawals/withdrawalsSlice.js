import { createSlice } from '@reduxjs/toolkit';

const withdrawalSlice = createSlice({
  name: 'withdrawals',
  initialState: {
    loading: false,
    error: null,
    withdrawalRequests: [],
  },
  reducers: {
    fetchWithdrawalsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWithdrawalsSuccess(state, action) {
      state.loading = false;
      state.withdrawalRequests = action.payload;
    },
    fetchWithdrawalsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    updateWithdrawalStart(state) {
      state.loading = true;
      state.error = null;
    },
    updateWithdrawalSuccess(state, action) {
      state.loading = false;
      const index = state.withdrawalRequests.findIndex((req) => req._id === action.payload.id);
      if (index !== -1) {
        state.withdrawalRequests[index].status = action.payload.status;
      }
    },
    updateWithdrawalFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWithdrawalsStart,
  fetchWithdrawalsSuccess,
  fetchWithdrawalsFailure,
  updateWithdrawalStart,
  updateWithdrawalSuccess,
  updateWithdrawalFailure,
} = withdrawalSlice.actions;

export default withdrawalSlice.reducer;
