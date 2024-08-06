import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    enrolledStudents: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    files: [
      {
        type: Schema.Types.ObjectId,
        ref: "File"
      }
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Course', courseSchema);
