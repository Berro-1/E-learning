import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  status: {
    type: String,
    enum: ['enrolled', 'withdrawn'],
    default: 'enrolled',
  },
}, { timestamps: true });

export default mongoose.model('Enrollment', enrollmentSchema);
