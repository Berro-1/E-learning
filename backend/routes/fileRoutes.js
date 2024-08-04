// backend/routes/file.js (Adding new routes)
import express from 'express';
import multer from 'multer';
import path from 'path';
import { uploadFile, getFile } from '../controllers/fileController.js';

const router = express.Router();
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); //Appending extension
  }
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), uploadFile);
router.get('/:id', getFile);

export default router;
