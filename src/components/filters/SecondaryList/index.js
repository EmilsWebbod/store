import React from 'react';
import {connect} from "react-redux";
import Secondary from '../Secondary/index';
import {setFilterSecondaryToPrimary, toggleFilterSecondary, toggleSecondary} from "../../../redux/actions/actions";
import {bindActionCreators} from "redux";
import Grid from "material-ui/Grid";
import styles from './index.scss';

const SecondaryList = ({secondaries, handleFilterClick, handleSecondaryToggle}) => (
  <Grid container>
    {secondaries.map((secondary, i) => (
      <Grid item xs={4} key={secondary.id}>
        <Secondary  {...secondary}
                   onClick={handleFilterClick(i)}
                   onToggle={() => handleSecondaryToggle(secondary)}/>
      </Grid>
    ))}
  </Grid>
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
    },
    handleSecondaryToggle: secondary => bindActionCreators((_secondary)  => {
      return (dispatch, getState) => {
        dispatch(toggleSecondary(_secondary.id));
        const primary = getState().filters.active.primary;
        const secondaries = getState().filters.secondaries;
        dispatch(setFilterSecondaryToPrimary(primary, secondaries));
      }
    }, dispatch)(secondary)
  }
};

export {SecondaryList, mapStateToProp, mapDispatchToProp}
export default connect(mapStateToProp, mapDispatchToProp)(SecondaryList)
