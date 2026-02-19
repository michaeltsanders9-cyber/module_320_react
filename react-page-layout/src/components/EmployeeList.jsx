import React from 'react';
import EmployeeListItem from './EmployeeListItem';
import './EmployeeList.css';
function EmployeeList() {
    const employees = [
        { name: "James King", title: "President and CEO", img: "https://randomuser.me/api/portraits/men/1.jpg" },
        { name: "Julie Taylor", title: "VP of Marketing" },
        { name: "Eugene Lee", title: "CFO" },
        { name: "John Williams", title: "VP of Sales" },
        { name: "Ray Moore", title: "VP of IT" },
        { name: "Paul Jones", title: "QA Manager" }
    ]
    return (
        <div className="employee-list">
            {employees.map((employee, index) => (
                <EmployeeListItem key={index} name={employee.name} title={employee.title} />
            ))}
        </div>
    );
}