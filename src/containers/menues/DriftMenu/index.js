import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Drawer from "material-ui/Drawer";
import DriftList from "../../../components/shopping/DriftList/index";

import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';

const DriftMenu = ({open, toggleDrift}) => (
  <Drawer variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: styles.drawerPaper
          }}
  >
    <div className={styles.drawerHeader}>
      <Typography variant="headline">
        Drift
      </Typography>
      <IconButton onClick={toggleDrift}>
        <ChevronLeftIcon />
      </IconButton>
    </div>

    <DriftList />
  </Drawer>
);

DriftMenu.propTypes = {
  toggleDrift: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
};

export default DriftMenu;
