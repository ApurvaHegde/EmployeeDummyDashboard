import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeProfile from './components/EmployeeProfile';
import Manager from './components/ManagerDashboard';
import Department from './components/DepartmentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/profile/" element={<EmployeeProfile />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/managers" element={<Manager />} />
        <Route path="/departments" element={<Department/>} />
      </Routes>
    </Router>
  );
}

export default App;
