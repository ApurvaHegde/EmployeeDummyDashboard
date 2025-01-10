import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import employeesData from '../assets/employees.json';

function EmployeeProfile() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const emp = employeesData.find(e => e.id === parseInt(id));
    setEmployee(emp);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSave = () => {
    // Save changes to the JSON (this would typically involve an API call)
    console.log('Updated Employee:', employee);
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Employee Profile</h2>
      <div>
        <label>First Name:</label>
        <input name="firstName" value={employee.firstName} onChange={handleChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input name="lastName" value={employee.lastName} onChange={handleChange} />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EmployeeProfile;