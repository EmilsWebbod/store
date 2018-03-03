import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import Button from "material-ui/Button/Button";
import Paper from "material-ui/Paper/Paper";
import Delete from "material-ui-icons/Delete"

const CartItem = ({id, text, total}) => (
  <div className={styles.CartItem} >
    <Button variant="raised" className={styles.Actions}>
      <Delete />
    </Button>
    <Paper className={styles.Paper}>
      <img src="images/man_white_background.jpg" alt="I" className={styles.Image} />
      <span className={styles.left}>{text}</span>
    </Paper>
    <Button variant="raised" className={styles.Actions}>
      -
    </Button>
    <Paper className={styles.Total}>
      {total}
    </Paper>
    <Button variant="raised" className={styles.Actions}>
      +
    </Button>
  </div>
);

CartItem.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CartItem;
