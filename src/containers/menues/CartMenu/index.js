import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from "material-ui/Drawer";

import ChevronRightIcon from 'material-ui-icons/ChevronRight';
import CartList from "../../../components/cart/CartList/index";

const CartMenu = ({open, toggleCart}) => (
  <Drawer variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: styles.drawerPaper
          }}
  >
    <div className={styles.drawerHeader}>
      <Typography variant="headline">
        Drift
      </Typography>
      <IconButton onClick={toggleCart}>
        <ChevronRightIcon />
      </IconButton>
    </div>

    <CartList />
  </Drawer>
);

CartMenu.propTypes = {
  toggleCart: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default CartMenu;
