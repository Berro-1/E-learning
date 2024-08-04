// backend/routes/file.js
import express from 'express';
import multer from 'multer';
import { uploadFile } from '../controllers/fileController.js';
import path from 'path';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), uploadFile);

export default router;
