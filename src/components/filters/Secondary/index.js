import React from 'react';
import PropTypes from 'prop-types';
import SecondaryFilter from '../SecondaryFilter/index';
import Collapse from 'material-ui/transitions/Collapse';
import List, {
  ListItem,
  ListItemText
} from 'material-ui/List';

import {
  ExpandLess,
  ExpandMore
} from 'material-ui-icons';


class Secondary extends React.Component {
  state = {
    open: true
  };

  toggleCollapse = () => {
    this.setState({
      open: !this.state.open
    })
  };

  render() {
    let {filters, id, text, onClick} = this.props;
    return (
      <List>
        <ListItem key={id} button onClick={this.toggleCollapse}>
          <ListItemText primary={text}/>
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open}>
          {filters.map((filter, i)=> (
            <SecondaryFilter {...filter} onClick={onClick(i)}/>
          ))}
        </Collapse>
      </List>
    )
  }
}

Secondary.proptype = {
  filters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Secondary;
