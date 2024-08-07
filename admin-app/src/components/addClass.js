// src/components/AddClass.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addClass } from '../redux/classes/classesActions';

const AddClass = () => {
  const [className, setClassName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addClass({ title: className, description }));
  };

  return (
    <div>
      <h2>Add Class</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Class Name:
          <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} />
        </label>
        <label>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Class</button>
      </form>
    </div>
  );
};

export default AddClass;
