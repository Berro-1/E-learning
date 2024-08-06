import express from 'express';
import { enrollInClass, getUserEnrollments, getAllEnrollments, withdrawFromClass } from '../controllers/enrollmentController.js';

const router = express.Router();

router.post('/enroll', enrollInClass);
router.get('/enrolled/:userId', getUserEnrollments);
router.get('/all-enrollments', getAllEnrollments);
router.post('/withdraw', withdrawFromClass);

export default router;
