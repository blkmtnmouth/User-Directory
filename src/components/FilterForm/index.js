import React from "react";
import "./style.css";

function FilterForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="roles">Filter by Role:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="roles"
          placeholder="Choose a Role"
          type="text"
          id="role"
          list="roles"
        />
        <datalist id="roles">
          <option value="Manager" />
          <option value="Intern" />
          <option value="Engineer" />
        </datalist>
      </div>
      <button type="submit" onClick={props.handleFormSubmit} className="btn">
        Filter
      </button>
      <button type="reset" onClick={props.handleFormReset} className="btn">
        Clear Filter
      </button>
    </form>
  );
}

export default FilterForm;
