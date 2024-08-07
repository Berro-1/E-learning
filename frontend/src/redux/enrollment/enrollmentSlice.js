import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enrolledClasses: [],
  loading: false,
  error: null
};

const enrollmentSlice = createSlice({
  name: 'enrollment',
  initialState,
  reducers: {
    fetchEnrolledClassesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchEnrolledClassesSuccess(state, action) {
      state.enrolledClasses = action.payload;
      state.loading = false;
    },
    fetchEnrolledClassesFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    enrollClassStart(state) {
      state.loading = true;
      state.error = null;
    },
    enrollClassSuccess(state, action) {
      state.enrolledClasses.push(action.payload);
      state.loading = false;
    },
    enrollClassFailure(state, action) {
      state.error = action.payload;
      state.loading = false;
    }
  }
});

export const {
  fetchEnrolledClassesStart,
  fetchEnrolledClassesSuccess,
  fetchEnrolledClassesFailure,
  enrollClassStart,
  enrollClassSuccess,
  enrollClassFailure
} = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
