// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import classesReducer from './classes/classesSlice';
import enrolledStudentsReducer from './enrolledStudents/enrolledStudentsSlice';

const store = configureStore({
  reducer: {
    classes: classesReducer,
    enrolledStudents: enrolledStudentsReducer,
  },
});

export default store;
