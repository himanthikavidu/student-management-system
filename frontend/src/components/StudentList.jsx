
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error(error));
  }, []);

  const deleteStudent = (indexNo) => {
    axios.delete(`http://localhost:3000/students/${indexNo}`)
      .then(() => setStudents(students.filter(s => s.indexNo !== indexNo)))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Index No</th>
            <th>Name</th>
            <th>Date of Birth</th>
            <th>GPA</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.indexNo}>
              <td>{student.indexNo}</td>
              <td>{student.name}</td>
              <td>{student.dob}</td>
              <td>{student.gpa}</td>
              <td>
                <Link to={`/edit/${student.indexNo}`}>Edit</Link>
                <button onClick={() => deleteStudent(student.indexNo)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
