import express from 'express';
import {
  enrollInClass,
  getUserEnrollments,
  getAllEnrollments,
  withdrawFromClass,
  getEnrolledStudentsByCourse, // Import the new controller
} from '../controllers/enrollmentController.js';

const router = express.Router();

router.post('/enroll', enrollInClass);
router.get('/enrolled/:userId', getUserEnrollments);
router.get('/all-enrollments', getAllEnrollments);
router.post('/withdraw', withdrawFromClass);
router.get('/course/:courseId', getEnrolledStudentsByCourse); // Add the new route

export default router;
