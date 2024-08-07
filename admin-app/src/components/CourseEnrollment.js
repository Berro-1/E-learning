// src/components/admin/CourseEnrollment.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses } from '../redux/classes/classesActions';
import { fetchEnrolledStudents } from '../redux/enrolledStudents/enrolledStudentsActions';

const CourseEnrollment = () => {
  const dispatch = useDispatch();
  const { classes, loading: classesLoading, error: classesError } = useSelector((state) => state.classes);
  const { students, loading: studentsLoading, error: studentsError } = useSelector((state) => state.enrolledStudents);
  const [selectedClassId, setSelectedClassId] = useState(null);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  const handleClassClick = (classId) => {
    setSelectedClassId(classId);
    dispatch(fetchEnrolledStudents(classId));
  };

  return (
    <div className="course-enrollment-section">
      <h2>Courses</h2>
      {classesLoading && <p>Loading courses...</p>}
      {classesError && <p>Error: {classesError}</p>}
      <div className="classes-grid">
        {classes && classes.map((classItem) => (
          <div key={classItem._id} className="class-card" onClick={() => handleClassClick(classItem._id)}>
            <h3>{classItem.title}</h3>
            <p>{classItem.description}</p>
          </div>
        ))}
      </div>

      {selectedClassId && (
        <div className="enrolled-students-section">
          <h2>Enrolled Students</h2>
          {studentsLoading && <p>Loading students...</p>}
          {studentsError && <p>Error: {studentsError}</p>}
          <ul>
            {students && students.map((enrollment) => (
              <li key={enrollment._id}>{enrollment.userId.username}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseEnrollment;
