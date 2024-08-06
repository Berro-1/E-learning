import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Files = () => {
  const [files, setFiles] = useState([]);
  const { enrolledClasses } = useSelector((state) => state.enrollment);
  const token = localStorage.getItem('token');
  
  useEffect(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      enrolledClasses.forEach(classItem => {
        axios.get(`http://localhost:4000/api/files/class/${classItem.classId._id}`)
          .then(response => {
            setFiles(prevFiles => [...prevFiles, ...response.data]);
          })
          .catch(error => {
            console.error('Error fetching files:', error);
          });
      });
    }
  }, [token, enrolledClasses]);

  return (
    <div className="files-section">
      <h2>Files</h2>
      {files.length === 0 ? (
        <p>No files available</p>
      ) : (
        files.map(file => (
          <div key={file._id} className="file-card">
            <h3>{file.originalname}</h3>
            <a href={`http://localhost:4000/api/files/download/${file._id}`} download>
              Download
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default Files;
