// backend/routes/course.js
import express from 'express';
import { addCourse, getCourses, getCourseByID } from '../controllers/courseController.js';

const router = express.Router();

router.post('/add', addCourse);
router.get('/', getCourses);
router.get('/:id', getCourseByID);

export default router;
