import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from '../../redux/classes/classesActions';
import { fetchEnrolledClasses, enrollClass } from '../../redux/enrollment/enrollmentActions';
import {jwtDecode} from 'jwt-decode';

const Enroll = () => {
  const dispatch = useDispatch();
  const { classes, loading: classesLoading, error: classesError } = useSelector((state) => state.classes);
  const { enrolledClasses, loading: enrollmentLoading, error: enrollmentError } = useSelector((state) => state.enrollment);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      dispatch(fetchClasses());
      dispatch(fetchEnrolledClasses(userId));
    }
  }, [dispatch, token]);

  const handleEnroll = (classId) => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      dispatch(enrollClass(userId, classId));
    }
  };

  return (
    <div className="enroll-section">
      <h2>Available Classes</h2>
      {classesLoading && <p>Loading classes...</p>}
      {classesError && <p>Error: {classesError}</p>}
      <div className="classes-grid">
        {classes && classes.map((classItem) => (
          <div key={classItem._id} className="class-card">
            <h3>{classItem.title}</h3>
            <p>{classItem.description}</p>
            <button onClick={() => handleEnroll(classItem._id)} disabled={enrollmentLoading}>
              Enroll
            </button>
          </div>
        ))}
      </div>

      <h2>Enrolled Classes</h2>
      {enrollmentLoading && <p>Loading enrolled classes...</p>}
      {enrollmentError && <p>Error: {enrollmentError}</p>}
      <div className="classes-grid">
        {enrolledClasses && enrolledClasses.map((classItem) => (
          <div key={classItem._id} className="class-card">
            <h3>{classItem.classId.title}</h3>
            <p>{classItem.classId.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enroll;
