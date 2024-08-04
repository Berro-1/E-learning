// backend/routes/course.js
import express from 'express';
import { addCourse, getCourses } from '../controllers/courseController.js';

const router = express.Router();

router.post('/add', addCourse);
router.get('/', getCourses);

export default router;
