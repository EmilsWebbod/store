import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {apiGetList} from "../../../redux/reducers/api/api.store";
import {bindActionCreators} from "redux";

import Tab from "../Tab/index";
import Paper from 'material-ui/Paper';
import Button from "material-ui/Button/Button";
import Arrow from "material-ui-icons/ArrowForward"

import styles from './index.scss';
import {toggleFilterSecondary, toggleSecondary} from "../../../redux/actions/actions";
import {Link} from "react-router";

class TabList extends Component {

  render() {
    const {secondaries, handleTabClick, handleTabDelete} = this.props;

    return (
      <div className={styles.TabList}>
        <Link to="/store/filter">
          <Button >
            Add Filters
            <Arrow />
          </Button>
        </Link>
        <Paper className={styles.Paper}>
          {secondaries.map((secondary, i) => {
            return secondary.filters.map((filter, j) => {
              return filter.active ? <Tab {...filter}
                                          onClick={() => handleTabClick(filter)}
                                          onDelete={() => handleTabDelete(i, j)} /> : '';
            })
          })}
        </Paper>
      </div>
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
    handleTabClick: filter => bindActionCreators(apiGetList, dispatch)(filter),
    handleTabDelete: (secondary_i, filter_i) => {
      dispatch(toggleFilterSecondary(secondary_i, filter_i))
    }
  }
};

export {TabList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(TabList)
