import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEnrolledFiles } from '../../redux/file/fileActions';

const Files = () => {
  const dispatch = useDispatch();
  const { files, loading, error } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchEnrolledFiles());
  }, [dispatch]);

  return (
    <div className="files-section">
      <h2>Files</h2>
      {loading && <p>Loading files...</p>}
      {error && <p>Error: {error}</p>}
      {files.length === 0 ? (
        <p>No files available</p>
      ) : (
        files.map((file) => (
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
