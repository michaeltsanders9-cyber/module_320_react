import EmployeeCard from "./components/EmployeeCard";
import HomePage from "./components/HomePage";
import "./App.css";
import React from "react";
import EmployeeList from "./components/EmployeeList";


// Employee data — just a plain JavaScript object
const employee = {
  firstName: "Julie",
  lastName: "Taylor",
  title: "VP of Marketing",
  phone: "781-000-0002",
  email: "jtaylor@fakeemail.com",
  picture: "https://randomuser.me/api/portraits/women/2.jpg",
};


function App() {
  return (
    <div className="app">
      <HomePage />
      <EmployeeList />
      <EmployeeCard employee={employee} />


    </div>
  );
}
export default App;

