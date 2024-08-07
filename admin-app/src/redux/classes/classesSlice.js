// src/redux/classes/classesSlice.js

import { createSlice } from '@reduxjs/toolkit';

const classesSlice = createSlice({
  name: 'classes',
  initialState: {
    classes: [],
    instructors: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchClassesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchClassesSuccess: (state, action) => {
      state.loading = false;
      state.classes = action.payload;
    },
    fetchClassesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addClassStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addClassSuccess: (state, action) => {
      state.loading = false;
      state.classes.push(action.payload);
    },
    addClassFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchInstructorsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchInstructorsSuccess: (state, action) => {
      state.loading = false;
      state.instructors = action.payload;
    },
    fetchInstructorsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchClassesStart,
  fetchClassesSuccess,
  fetchClassesFailure,
  addClassStart,
  addClassSuccess,
  addClassFailure,
  fetchInstructorsStart,
  fetchInstructorsSuccess,
  fetchInstructorsFailure,
} = classesSlice.actions;

export default classesSlice.reducer;
