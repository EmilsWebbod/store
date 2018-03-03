import React from 'react';
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';
import styles from './index.scss';
import cn from 'classnames';

const Primary = ({onClick, active, id, text, classes}) => (
  <Button color="primary"
          onClick={onClick(id)}
          className={cn(
            styles.Primary,
            active && styles.active
          )}>
    {text}
  </Button>
);

Primary.proptype = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Primary;
