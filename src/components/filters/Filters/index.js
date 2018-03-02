import React from 'react';
import PropTypes from "prop-types";
import FilterItem from "../FilterItem/index";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {toggleFilterFilter} from "../../../redux/actions/actions";

const Filters = ({filters, onFilterSelect}) => (
  <ul>
    {filters.map(filter => (
      <FilterItem key={filter.id} {...filter} onSelect={onFilterSelect}  />
    ))}
  </ul>
);

Filters.proptype = {
  filters: PropTypes.array.isRequired,
  onFilterSelect: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    filters: state.filters.filters
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterSelect: event => {
      const value = event.target.value;
      dispatch(toggleFilterFilter(value))
    }
  }
};

export {mapStateToProps, mapDispatchToProps, Filters}
export default connect(mapStateToProps, mapDispatchToProps)(Filters);
