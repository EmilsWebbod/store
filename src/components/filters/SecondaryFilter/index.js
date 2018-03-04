import React from 'react';
import PropTypes from 'prop-types';

import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";

import Checkbox from "material-ui/Checkbox/Checkbox";
import styles from './index.scss';

class SecondaryFilter extends React.Component {

  render() {
    let {id, text, active, onClick} = this.props;

    const handleClick = () => {
      active = !active;
      onClick(id);
    };

    return (
      <ListItem key={id} dense button className={styles.SecondaryFilter} onClick={handleClick}>
        <ListItemText inset primary={text} />
        <ListItemSecondaryAction>
          <Checkbox
            checked={active}
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

SecondaryFilter.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

export default SecondaryFilter;
