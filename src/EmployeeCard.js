import React from "react";
import { Link } from "react-router-dom";
function EmployeeCard({ employee, handleDelete, handleEdit }) {
  return (
    <div className="EmployeeCard">
      <div className="EmployeeCard-header">
        <div className="EmployeeCard-title">Employee Details</div>
      </div>
      <Link to={`/employee/${employee.id}`} className="card-link">
        <div className="EmployeeCard-content">
          <div className="EmployeeCard-info">ID: {employee.id}</div>
          <div className="EmployeeCard-info">
            Name: {employee.employee_name}
          </div>
          <div className="EmployeeCard-info">
            Salary: {employee.employee_salary}
          </div>
          <div className="EmployeeCard-info">Age: {employee.employee_age}</div>
        </div>
      </Link>
      <div className="EmployeeCard-actions">
        <button
          className="EmployeeCard-button"
          onClick={() => handleEdit(employee.id)}
        >
          Edit
        </button>
        <button
          className="EmployeeCard-button"
          onClick={() => handleDelete(employee.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
