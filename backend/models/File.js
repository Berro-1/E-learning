const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fileSchema = new Schema(
  {
    filename: { type: String, required: true },
    path: { type: String, required: true },
    course: { type: Schema.Types.ObjectId, ref: "Course" },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
