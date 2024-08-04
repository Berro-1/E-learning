// backend/controllers/fileController.js
import File from '../models/File.js';

export const uploadFile = async (req, res) => {
  const { course, uploadedBy } = req.body;
  try {
    const newFile = new File({
      filename: req.file.filename,
      path: req.file.path,
      course,
      uploadedBy
    });
    await newFile.save();
    res.status(201).send('File uploaded successfully');
  } catch (error) {
    res.status(500).json({ message: "Error uploading file.", error: error.message });
  }
};
export const getFile = async (req, res) => {
    const { id } = req.params;
    try {
      const file = await File.findById(id);
      if (!file) {
        return res.status(404).json({ message: 'File not found.' });
      }
      res.status(200).sendFile(file.path, { root: '.' });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving file.", error: error.message });
    }
  };