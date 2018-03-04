import React from 'react';
import PropTypes from 'prop-types'
import Chip from "material-ui/Chip/Chip";
import styles from './index.scss';
import {Link} from "react-router";

const Tab = ({id, text, onClick, onDelete}) => (
  <Link to="/store/list">
    <Chip className={styles.Tab} onClick={onClick} label={text} onDelete={onDelete} />
  </Link>
);

Tab.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Tab;
