import React from 'react';
import PropTypes from 'prop-types'
import Chip from "material-ui/Chip/Chip";
import styles from './index.scss';

const Tab = ({id, text, onClick}) => (
  <Chip className={styles.Tab} onClick={onClick} label={text} />
);

Tab.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Tab;
