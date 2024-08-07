import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWithdrawals, updateWithdrawalStatus } from '../redux/withdrawals/withdrawalsActions';

const ManageWithdrawals = () => {
  const dispatch = useDispatch();
  const { withdrawalRequests, loading, error } = useSelector((state) => state.withdrawals);

  useEffect(() => {
    dispatch(fetchWithdrawals());
  }, [dispatch]);

  const handleUpdateStatus = (id, status) => {
      console.log(status);
    dispatch(updateWithdrawalStatus(id, status));
    
  };

  return (
    <div className="manage-withdrawals-section">
      <h2>Manage Withdrawals</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="withdrawals-list">
        {withdrawalRequests.map((request) => (
          <div key={request._id} className="withdrawal-card">
            <p><strong>Student:</strong> {request.student.username}</p>
            <p><strong>Reason:</strong> {request.reason}</p>
            <p><strong>Status:</strong> {request.status}</p>
            <button onClick={() => handleUpdateStatus(request._id, 'approved')}>Approve</button>
            <button onClick={() => handleUpdateStatus(request._id, 'rejected')}>Reject</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageWithdrawals;
