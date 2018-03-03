import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss'

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper'

import Eye from 'material-ui-icons/RemoveRedEye'
import Close from 'material-ui-icons/Close';

const Drift = ({id, text, onClick}) => (
  <div className={styles.Drift}>
    <Button variant="raised" className={styles.button}>
      <Close className={styles.right} onClick={onClick}/>
    </Button>
    <Paper className={styles.paper}>
      {text}
    </Paper>
    <Button variant="raised" className={styles.button}>
      <Eye className={styles.right} onClick={onClick}/>
    </Button>
  </div>
);

Drift.proptype = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Drift;
