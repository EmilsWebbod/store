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

  render() {
    const {filters, id, text, active, onClick, onToggle} = this.props;
    return (
      <List>
        <ListItem button onClick={onToggle}>
          <ListItemText primary={text}/>
          {active ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={active}>
          {filters.map((filter, i)=> (
            <SecondaryFilter key={filter.id} {...filter} onClick={onClick(i)}/>
          ))}
        </Collapse>
      </List>
    )
  }
}

Secondary.proptype = {
  filters: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Secondary;
