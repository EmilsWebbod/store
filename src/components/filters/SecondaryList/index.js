import React from 'react';
import {connect} from "react-redux";
import Secondary from '../Secondary/index';
import {toggleFilterSecondary} from "../../../redux/actions/actions";

const SecondaryList = ({secondaries, handleFilterClick}) => (
  <div>
    {secondaries.map((secondary, i) => (
      <Secondary key={secondary.id} {...secondary} onClick={handleFilterClick(i)}/>
    ))}
  </div>
);

const mapStateToProp = state => {
  return {
    secondaries: state.filters.secondaries
  }
};

const mapDispatchToProp = dispatch => {
  return {
    handleFilterClick: secondary_i => filter_i => () => {
      dispatch(toggleFilterSecondary(secondary_i, filter_i));
    }
  }
};

export {SecondaryList, mapStateToProp, mapDispatchToProp}
export default connect(mapStateToProp, mapDispatchToProp)(SecondaryList)
