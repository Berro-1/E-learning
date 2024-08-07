import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

const withdrawalSlice = createSlice({
  name: 'withdrawals',
  initialState,
  reducers: {
    withdrawalRequestStart(state) {
      state.loading = true;
      state.error = null;
    },
    withdrawalRequestSuccess(state) {
      state.loading = false;
    },
    withdrawalRequestFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  withdrawalRequestStart,
  withdrawalRequestSuccess,
  withdrawalRequestFailure,
} = withdrawalSlice.actions;

export default withdrawalSlice.reducer;
