import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../redux/auth/authSlice';
import enrollmentReducer from '../redux/enrollment/enrollmentSlice';
import classesReducer from '../redux/classes/classesSlice';
import filesReducer from '../redux/file/fileSlice'
import withdrawalReducer from '../redux/withdrawal/withdrawalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    enrollment: enrollmentReducer,
    classes: classesReducer,
    files: filesReducer,
    withdrawals: withdrawalReducer,
  },
});
