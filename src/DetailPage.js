import React from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";

function DetailPage() {
  const { id } = useParams();
  const employee = data.data.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div className="container">
      <div className="EmployeeCard">
        <div className="EmployeeCard-header">
          <div className="EmployeeCard-title">Employee Details</div>
        </div>
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
      </div>
    </div>
  );
}

export default DetailPage;
