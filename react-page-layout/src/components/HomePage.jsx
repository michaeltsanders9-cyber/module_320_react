import "./HomePage.css";
import React from "react"; `
import EmployeeList from "./EmployeeList";
import Header from "./Header";
i  `

function HomePage() {
    return (
        <div className="home-page">
            <Header title="Employee Directory" />

            <p>Find information about our employees below.</p>

        </div>
    )
}

export default HomePage;