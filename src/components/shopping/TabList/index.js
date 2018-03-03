import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {apiGetList} from "../../../redux/reducers/api/api.store";
import {bindActionCreators} from "redux";

import Tab from "../Tab/index";
import Paper from 'material-ui/Paper';

import styles from './index.scss';

class TabList extends Component {

  render() {
    const {secondaries, handleTabClick} = this.props;

    return (
      <Paper className={styles.Paper}>
        {secondaries.map(secondary => {
          return secondary.filters.map(filter => {
            return filter.active ? <Tab {...filter} onClick={() => handleTabClick(filter)} /> : '';
          })
        })}
      </Paper>
    )
  }
}

const mapStateToProps = state => {
  return {
    secondaries: state.filters.secondaries
  }
};

const mapDispatchToProps = dispatch => {
  return {
    handleTabClick: filter => bindActionCreators(apiGetList, dispatch)(filter)
  }
};

export {TabList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(TabList)
