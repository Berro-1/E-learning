// backend/controllers/courseController.js
import Course from '../models/Course.js';

export const addCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();
    res.status(201).send('Course added successfully');
  } catch (error) {
    res.status(500).json({ message: "Error adding course.", error: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving courses.", error: error.message });
  }
};
