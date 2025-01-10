// import React, { useState, useEffect } from 'react';
// import employeesData from '../assets/employees.json';
// import '../css/EmployeeDashboard.css';
// import { Link } from 'react-router-dom';
// import img from "../assets/profile.jpeg";

// function EmployeeDashboard() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employee data
//     setEmployees(employeesData);
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <header className="dashboard-header">
//         <Link to="#" className="header-section">Profile</Link>
//         <Link to="/dashboard" className="header-section">Employees</Link>
//         <Link to="/managers" className="header-section">Managers</Link>
//         <Link to="/departments" className="header-section">Department</Link>
//       </header>
//       <main className="dashboard-content">
//         <h2>Employee List</h2>
//         <table className="employee-table">
//           <thead>
//             <tr>
//               <th>Photo</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Email</th>
//               <th>Manager</th>
//               <th>Phone</th>
//               <th>Department</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.id}>
//                 <td><img src={img} alt="Employee" /></td>
//                 <td>{employee.first_name}</td>
//                 <td>{employee.last_name}</td>
//                 <td>{employee.email}</td>
//                 <td>{employee.manager}</td>
//                 <td>{employee.phone_number}</td>
//                 <td>{employee.department_id}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

// export default EmployeeDashboard;


import React, { useState, useEffect } from 'react';
import employeesData from '../assets/employees.json';
import '../css/EmployeeDashboard.css';
import { Link } from 'react-router-dom';
import img from "../assets/profile.jpeg";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch employee data
    setEmployees(employeesData);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) => {
    const fullName = `${employee.first_name} ${employee.last_name}`.toLowerCase();
    return (
      fullName.includes(searchTerm.toLowerCase()) ||
      employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department_id.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <Link to="#" className="header-section">Profile</Link>
        <Link to="/dashboard" className="header-section">Employees</Link>
        <Link to="/managers" className="header-section">Managers</Link>
        <Link to="/departments" className="header-section">Department</Link>
      </header>
      <main className="dashboard-content">
        <h2>Employee List</h2>
        <input
          type="text"
          placeholder="Search employees"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <table className="employee-table">
          <thead>
            <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Manager</th>
              <th>Phone</th>
              <th>Department</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td><img src={img} alt="Employee" /></td>
                <td>{employee.first_name}</td>
                <td>{employee.last_name}</td>
                <td>{employee.email}</td>
                <td>{employee.manager}</td>
                <td>{employee.phone_number}</td>
                <td>{employee.department_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default EmployeeDashboard;