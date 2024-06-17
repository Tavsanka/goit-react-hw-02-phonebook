import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

const Filter = ({ value, onChange }) => {
  return (
    <>
    <div className="contact">
      <label htmlFor="search">Find contact by name</label>
      <input
        type="text"
        id="search"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
