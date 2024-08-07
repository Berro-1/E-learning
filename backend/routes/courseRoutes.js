// backend/routes/course.js
import express from 'express';
import { addCourse, getCourses, getCourseByID, getInstructors } from '../controllers/courseController.js';

const router = express.Router();

router.post('/add', addCourse);
router.get('/', getCourses);
router.get('/:id', getCourseByID);
router.get('/instructors', getInstructors);

export default router;
