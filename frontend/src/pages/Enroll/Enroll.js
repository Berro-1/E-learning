import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from '../../redux/classes/classesActions';
import { fetchEnrolledClasses, enrollClass } from '../../redux/enrollment/enrollmentActions';
import { requestWithdrawal } from '../../redux/withdrawal/withdrawalActions';
import {jwtDecode} from 'jwt-decode';
import Modal from 'react-modal';

const Enroll = () => {
  const dispatch = useDispatch();
  const { classes, loading: classesLoading, error: classesError } = useSelector((state) => state.classes);
  const { enrolledClasses, loading: enrollmentLoading, error: enrollmentError } = useSelector((state) => state.enrollment);
  const { loading: withdrawalLoading, error: withdrawalError } = useSelector((state) => state.withdrawals);
  const token = localStorage.getItem('token');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [withdrawalReason, setWithdrawalReason] = useState('');
  const [selectedClass, setSelectedClass] = useState(null);

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

  const handleWithdrawal = () => {
    if (token && selectedClass) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      dispatch(requestWithdrawal(userId, selectedClass._id, withdrawalReason));
      setIsModalOpen(false);
      setWithdrawalReason('');
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
            <h3>{classItem.classId?.title}</h3>
            <button onClick={() => { setSelectedClass(classItem.classId); setIsModalOpen(true); }}>
              Withdraw
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Withdrawal Request"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Withdrawal Request</h2>
        <textarea
          value={withdrawalReason}
          onChange={(e) => setWithdrawalReason(e.target.value)}
          placeholder="Reason for withdrawal"
        />
        <button onClick={handleWithdrawal} disabled={withdrawalLoading}>
          Submit
        </button>
        <button onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
        {withdrawalError && <p>Error: {withdrawalError}</p>}
      </Modal>
    </div>
  );
};

export default Enroll;
