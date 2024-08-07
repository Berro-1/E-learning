// src/redux/enrolledStudents/enrolledStudentsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const enrolledStudentsSlice = createSlice({
  name: 'enrolledStudents',
  initialState: {
    students: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchEnrolledStudentsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEnrolledStudentsSuccess(state, action) {
      state.loading = false;
      state.students = action.payload;
    },
    fetchEnrolledStudentsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchEnrolledStudentsStart,
  fetchEnrolledStudentsSuccess,
  fetchEnrolledStudentsFailure,
} = enrolledStudentsSlice.actions;

export default enrolledStudentsSlice.reducer;
