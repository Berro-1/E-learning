import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";
import withdrawalRoutes from "./routes/withdrawalRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/files", fileRoutes);
app.use("/api/withdrawals", withdrawalRoutes);
app.use('/api/enrollments', enrollmentRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log(err));
