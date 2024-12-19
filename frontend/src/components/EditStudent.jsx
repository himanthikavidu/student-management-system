
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { indexNo } = useParams();
  const [form, setForm] = useState({ name: '', dob: '', gpa: '' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/students/${indexNo}`)
      .then(response => setForm(response.data))
      .catch(error => console.error(error));
  }, [indexNo]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/students/${indexNo}`, form)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Date of Birth:</label>
        <input type="date" name="dob" value={form.dob} onChange={handleChange} required />

        <label>GPA:</label>
        <input type="number" step="0.1" name="gpa" value={form.gpa} onChange={handleChange} required />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
