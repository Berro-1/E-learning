// src/components/EnrolledStudents.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEnrolledStudents } from '../redux/enrolledStudents/enrolledStudentsActions';

const EnrolledStudents = ({ classId }) => {
  const dispatch = useDispatch();
  const { students, loading, error } = useSelector((state) => state.enrolledStudents);

  useEffect(() => {
    dispatch(fetchEnrolledStudents(classId));
  }, [dispatch, classId]);

  return (
    <div>
      <h2>Enrolled Students</h2>
      {loading && <p>Loading students...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnrolledStudents;
