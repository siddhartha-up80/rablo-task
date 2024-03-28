import React, { useState } from "react";
import EmployeeCard from "./EmployeeCard";
import SearchBar from "./SearchBar";
import { data } from "./data"; 

function EmployeeDashboard() {
  const [employees, setEmployees] = useState(data.data); 
  const [filteredEmployees, setFilteredEmployees] = useState(data.data);

  const handleSearch = (searchTerm) => {
    const filtered = employees.filter((employee) =>
      Object.values(employee).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredEmployees(filtered);
  };

  const handleDelete = (employeeId) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.id !== employeeId
    );
    setEmployees(updatedEmployees);
    setFilteredEmployees(updatedEmployees);
  };

  const handleEdit = (employeeId) => {
    console.log("Edit employee with ID:", employeeId);
  };

  const handleCardClick = (employeeId) => {
    console.log("Navigate to detail page for employee with ID:", employeeId);
  };

  return (
    <div className="container">
      <h1>Employee Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {filteredEmployees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            onClick={handleCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
