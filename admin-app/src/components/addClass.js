import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClasses, addClass, fetchInstructors } from '../redux/classes/classesActions';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedInstructor, setSelectedInstructor] = useState('');
  const dispatch = useDispatch();
  const { classes, instructors, loading, error } = useSelector((state) => state.classes);

  useEffect(() => {
    dispatch(fetchClasses());
    dispatch(fetchInstructors());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClass({ title: className, description, instructor: selectedInstructor }));
  };

  return (
    <div className="add-class-section">
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class Name:
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
        </label>
        <label>
          Instructor:
          <select
            value={selectedInstructor}
            onChange={(e) => setSelectedInstructor(e.target.value)}
          >
            <option value="">Select an instructor</option>
            {instructors.map((instructor) => (
              <option key={instructor._id} value={instructor._id}>
                {instructor.username}
              </option>
            ))}
          </select>
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <button type="submit">Add Class</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AddClass;
