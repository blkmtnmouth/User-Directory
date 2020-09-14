import React from "react";
import "./style.css";

function Employee(props) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.role}</td>
    </tr>
  );
}

export default Employee;
