import mongoose from 'mongoose';
import Enrollment from '../models/Enrollment.js';
import Course from '../models/Course.js';

export const getEnrolledStudentsByCourse = async (req, res) => {
  const { courseId } = req.params;
  try {
    const enrollments = await Enrollment.find({ classId: courseId }).populate('userId', 'username');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving enrolled students.', error: error.message });
  }
};

export const enrollInClass = async (req, res) => {
  const { userId, classId } = req.body;
  try {
    const existingEnrollment = await Enrollment.findOne({ userId, classId });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'User is already enrolled in this class' });
    }

    const newEnrollment = new Enrollment({ userId, classId });
    await newEnrollment.save();

    // Update the Course document to add the new enrollment to the enrolledStudents array
    await Course.findByIdAndUpdate(classId, {
      $push: { enrolledStudents: newEnrollment._id }
    });

    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getUserEnrollments = async (req, res) => {
  const { userId } = req.params; 
  console.log(userId);
  
  try {
    const enrollments = await Enrollment.find({userId: userId}).populate('classId');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find().populate('userId classId');
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const withdrawFromClass = async (req, res) => {
  const { enrollmentId } = req.body;
  try {
    const enrollment = await Enrollment.findById(enrollmentId);
    if (!enrollment) {
      return res.status(404).json({ message: 'Enrollment not found' });
    }

    enrollment.status = 'withdrawn';
    await enrollment.save();
    res.status(200).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
