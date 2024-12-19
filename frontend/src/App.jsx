
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Students</Link>
        <Link to="/add">Add Student</Link>
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
