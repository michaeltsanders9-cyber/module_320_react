function EmployeeListItem({ name, title }) {
    return (
        <div className="employee-list-item">
            <div className="employee-avatar"></div>
            <div className="employee-info">
                <h3>{name}</h3>
                <p>{title}</p>
            </div>
        </div>
    );
}

export default EmployeeListItem;