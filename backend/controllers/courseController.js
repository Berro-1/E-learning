import Course from '../models/Course.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

export const addCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    // Convert instructor ID to ObjectId using the new keyword
    const instructorId = new mongoose.Types.ObjectId(instructor);

    const newCourse = new Course({ title, description, instructor: instructorId });
    await newCourse.save();
    res.status(201).send('Course added successfully');
  } catch (error) {
    res.status(500).json({ message: 'Error adding course.', error: error.message });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving courses.', error: error.message });
  }
};

export const getCourseByID = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id).populate('instructor', 'username'); // Ensure instructor details are populated
    return res.status(200).json(course);
  } catch (error) {
    return res.status(500).json({ message: 'Error retrieving course.', error: error.message });
  }
};

export const getInstructors = async (req, res) => {
  try {
    const instructors = await User.find({ role: 'instructor' });
    res.status(200).json(instructors);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving instructors.', error: error.message });
  }
};
