import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MenuIcon from 'material-ui-icons/Menu';
import Cart from 'material-ui-icons/ShoppingCart'
import Link from 'react-router/lib/Link';

import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import styles from './styles.scss'

const Header = ({className, open, toggleDrift, toggleCart}) => (
  <AppBar className={className}>
    <Toolbar>
      <IconButton color="inherit" aria-label="Menu" onClick={toggleDrift}
                  className={classNames(styles.menuButton, open && styles.hide)}>
        <MenuIcon  />
      </IconButton>
      <Typography variant="title" color="inherit" className={styles.flex}>
        <Link activeClassName={styles.activeLink} to="/store">
          Men
        </Link>
      </Typography>
      <Typography variant="title" color="inherit" className={styles.flex}>
        <Link activeClassName={styles.activeLink} to="/store">
          Women
        </Link>
      </Typography>
      <Typography variant="title" color="inherit" className={styles.flex}>
        <Link activeClassName={styles.activeLink} to="/store">
          Children
        </Link>
      </Typography>
      <Button color="inherit">Login</Button>

      <IconButton color="inherit" aria-label="Menu" onClick={toggleCart}>
        <Cart />
      </IconButton>
    </Toolbar>
  </AppBar>
);

Header.proptype = {
  toggleDrift: PropTypes.func.isRequired,
  toggleCart: PropTypes.func.isRequired
};

export default Header;
