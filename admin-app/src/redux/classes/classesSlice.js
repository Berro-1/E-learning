// src/redux/classes/classesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    classes: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchClassesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchClassesSuccess(state, action) {
      state.loading = false;
      state.classes = action.payload;
    },
    fetchClassesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    addClassSuccess(state, action) {
      state.classes.push(action.payload);
    },
  },
});

export const {
  fetchClassesStart,
  fetchClassesSuccess,
  fetchClassesFailure,
  addClassSuccess,
} = classesSlice.actions;

export default classesSlice.reducer;
