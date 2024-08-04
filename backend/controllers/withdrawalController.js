// backend/controllers/withdrawalController.js
import Withdrawal from '../models/Withdrawal.js';

export const requestWithdrawal = async (req, res) => {
  const { student, course, reason } = req.body;
  try {
    const newWithdrawal = new Withdrawal({ student, course, reason, status: 'pending' });
    await newWithdrawal.save();
    res.status(201).json({ message: 'Withdrawal request submitted successfully.' });
  } catch (error) {
    res.status(500).json({ message: "Error submitting withdrawal request.", error: error.message });
  }
};

export const handleWithdrawal = async (req, res) => {
  const { id, action } = req.body;
  try {
    const withdrawal = await Withdrawal.findById(id);
    if (!withdrawal) {
      return res.status(404).json({ message: 'Withdrawal request not found.' });
    }
    withdrawal.status = action === 'approve' ? 'approved' : 'rejected';
    await withdrawal.save();
    res.status(200).json({ message: `Withdrawal request ${action}d.` });
  } catch (error) {
    res.status(500).json({ message: "Error handling withdrawal request.", error: error.message });
  }
};

export const getWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find();
    res.status(200).json(withdrawals);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving withdrawals.", error: error.message });
  }
};
