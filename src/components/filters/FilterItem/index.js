import React from 'react';
import PropTypes from "prop-types";

const getSelected = (set, option) => {
  return option.selected ? option.id : set ? set : 0;
};

const FilterItem = ({id, text, options, onSelect}) => (
  <select onChange={onSelect} value={options.reduce(getSelected, null)}>
    {options.map(option => (
      <option key={option.id} value={option.id} >{option.text}</option>
    ))}
  </select>
);

FilterItem.proptype = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default FilterItem;
