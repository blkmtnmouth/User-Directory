import React, { Component } from "react";
import Employee from "../Employee";
import employees from "./employees.json";
import FilterForm from "../FilterForm";
import SortBtn from "../SortBtn";
import "./style.css";

//want to only use this for the employees that fit the criteria or build it in a certain order.

class EmployeeTable extends Component {
  // Set this.state.employees to the empoloyees json
  state = {
    list: employees,
    filterBy: "",
  };

  handleFormSubmit = (event) => {
    //prevent default
    event.preventDefault();

    //filter through the original employees JSON and select only employees with that role
    const employeesFiltered = this.state.list.filter(
      (emp) => emp.role === this.state.filterBy
    );

    // update the state
    this.setState({
      list: employeesFiltered,
    });
  };

  handleInputChange = (event) => {
    this.setState({ filterBy: event.target.value });
  };

  handleFormReset = (event) => {
    this.setState({ list: employees });
  };

  //button to sort does this:
  handleSort = (event) => {
    event.preventDefault();
    const employeesSorted = this.state.list.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({
      list: employeesSorted,
    });
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((employee) => (
              <Employee
                name={employee.name}
                phone={employee.phone}
                role={employee.role}
                key={employee.name}
              />
            ))}
          </tbody>
        </table>
        <br></br>
        <br></br>
        <FilterForm
          handleFormSubmit={this.handleFormSubmit}
          handleFormReset={this.handleFormReset}
          handleInputChange={this.handleInputChange}
        />
        <br></br>
        <SortBtn handleSort={this.handleSort} />
      </div>
    );
  }
}

export default EmployeeTable;
