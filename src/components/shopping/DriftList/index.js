import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import Drift from "../Drift/index";
import {setActiveItem} from "../../../redux/actions/actions";
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

class DriftList extends React.Component {
  state = {
    open: true
  };

  toggleCollapse = () => {
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    const {drift_headers, drift_list, handleDriftClick} = this.props;
    return (
      <div>
        {drift_list.map((filter, i) => (
          <List key={i}>
            <ListItem button onClick={this.toggleCollapse}>
              <ListItemText primary={drift_headers[i]} />
              {this.state.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.open}>
              {filter.map((item, j) => (
                <Drift key={item.id} {...item} onClick={() => handleDriftClick(item)}/>
              ))}
            </Collapse>
          </List>
        ))}
      </div>
    )
  }
}

DriftList.proptype = {
  drift_headers: PropTypes.array,
  drift_list: PropTypes.array
};

// Need to have updated. Will not re-render.
const mapStateToProps = state => ({
  updated: state.shopping.drift.updated,
  drift_headers: state.shopping.drift.filter,
  drift_list: state.shopping.drift.list
});

const mapDispatchToProps = dispatch => ({
  handleDriftClick: (item) => {
    dispatch(setActiveItem(item))
  }
});

export {DriftList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(DriftList);
