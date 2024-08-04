// backend/routes/withdrawal.js
import express from 'express';
import { requestWithdrawal, handleWithdrawal, getWithdrawals } from '../controllers/withdrawalController.js';

const router = express.Router();

router.post('/request', requestWithdrawal);
router.post('/handle', handleWithdrawal);
router.get('/', getWithdrawals);

export default router;
