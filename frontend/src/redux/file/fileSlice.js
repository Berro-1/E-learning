import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  files: [],
  loading: false,
  error: null,
};

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    fetchFilesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFilesSuccess(state, action) {
      state.loading = false;
      state.files = action.payload;
    },
    fetchFilesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchFilesStart,
  fetchFilesSuccess,
  fetchFilesFailure,
} = fileSlice.actions;

export default fileSlice.reducer;
