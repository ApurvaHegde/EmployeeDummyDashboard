import React, { useState } from 'react';
import departmentsData from '../assets/departments.json';
import '../css/DepartmentDashboard.css';
import { Link } from 'react-router-dom';

function DepartmentDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(departmentsData);
  console.log(currentIndex);

  const handleNext = () => {
    if (currentIndex < departmentsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentDepartment = departmentsData[currentIndex];
  console.log(currentDepartment);
  console.log(currentDepartment.department_id);
  console.log(currentDepartment.Head); // Updated to match JSON key
  console.log(currentDepartment.Contact); // Updated to match JSON key

  return (
    <div className="department-cards-container">
      <header className="dashboard-header">
        <Link to="#" className="header-section">Profile</Link>
        <Link to="/dashboard" className="header-section">Employees</Link>
        <Link to="/managers" className="header-section">Managers</Link>
        <Link to="/departments" className="header-section">Department</Link>
      </header>
      <div className="card">
        <h2>{currentDepartment.department_name}</h2>
        <p><strong>Department ID:</strong> {currentDepartment.department_id}</p>
        <p><strong>Department Head:</strong> {currentDepartment.Head}</p>
        <p><strong>Number of Employees:</strong> {currentDepartment.No_Employees}</p>
        <p><strong>Functions:</strong> {currentDepartment.department_functions}</p>
        <p><strong>Contact Information:</strong> {currentDepartment.Contact}</p>
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === departmentsData.length - 1}>Next</button>
      </div>
    </div>
  );
}

export default DepartmentDashboard;