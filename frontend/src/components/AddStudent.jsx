
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddStudent() {
  const [form, setForm] = useState({ name: '', dob: '', gpa: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/students', form)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />

        <label>GPA:</label>
        <input type="number" step="0.1" name="gpa" value={form.gpa} onChange={handleChange} required />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;
