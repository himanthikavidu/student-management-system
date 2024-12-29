
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <Router>
      <nav className="nav-container">
        <Link className="student-view-tab" to="/">
          Students
        </Link>
        <Link className="add-student-tab" to="/add">
          Add Student
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:indexNo" element={<EditStudent />} />
      </Routes>
    </Router>
  );
  
}

export default App;
