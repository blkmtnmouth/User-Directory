import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Footer from "./components/Footer";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Employee Directory</h1>
          <h2>Welcome to the list of employees</h2>
        </div>
        <EmployeeTable />
        <br></br>
        <Footer />
      </div>
    );
  }
}

export default App;
