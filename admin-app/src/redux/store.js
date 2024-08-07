// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import classesReducer from './classes/classesSlice';
import enrolledStudentsReducer from './enrolledStudents/enrolledStudentsSlice';
import withdrawalReducer from './withdrawals/withdrawalsSlice';

const store = configureStore({
  reducer: {
    classes: classesReducer,
    enrolledStudents: enrolledStudentsReducer,
    withdrawals: withdrawalReducer,

  },
});

export default store;
