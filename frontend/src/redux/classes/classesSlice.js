import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  classes: [],
  loading: false,
  error: null
};

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    fetchClassesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchClassesSuccess(state, action) {
      state.classes = action.payload;
      state.loading = false;
    },
    fetchClassesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const { fetchClassesStart, fetchClassesSuccess, fetchClassesFailure } = classesSlice.actions;
export default classesSlice.reducer;
