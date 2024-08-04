import mongoose from "mongoose";
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
        default: 0,
      },
    ],

    files: [{ type: Schema.Types.ObjectId, ref: "File" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Course',courseSchema);
