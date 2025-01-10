import React, { useState, useEffect } from 'react';
import ManagerData from '../assets/managers.json';
import '../css/EmployeeDashboard.css';
import { Link } from 'react-router-dom';
import img from "../assets/profile.jpeg";

function ManagerDashboard() {
  const [Managers, setManagers] = useState([]);

  useEffect(() => {
    // Fetch employee data
    setManagers(ManagerData);
  }, []);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <Link to="#" className="header-section">Profile</Link>
        <Link to="/dashboard" className="header-section">Employees</Link>
        <Link to="/managers" className="header-section">Managers</Link>
        <Link to="/departments" className="header-section">Department</Link>
      </header>
      <main className="dashboard-content">
        <h2>Manager List</h2>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              {/* <th>Manager</th> */}
              <th>Phone</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {Managers.map((Manager) => (
              <tr key={Manager.id}>
                <td><img src={img} alt="Employee" /></td>
                <td>{Manager.first_name}</td>
                <td>{Manager.last_name}</td>
                <td>{Manager.email}</td>
                {/* <td>{Manager.manager}</td> */}
                <td>{Manager.phone_number}</td>
                <td>{Manager.department_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default ManagerDashboard;