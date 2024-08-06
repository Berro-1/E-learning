import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import enrollmentReducer from '../redux/enrollment/enrollmentSlice';
import classesReducer from '../redux/classes/classesSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    enrollment: enrollmentReducer,
    classes: classesReducer,
  },
});
