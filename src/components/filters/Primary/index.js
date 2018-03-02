import React from 'react';
import PropTypes from 'prop-types'
import Button from 'material-ui/Button';

const Primary = ({onClick, id, text, classes}) => (
  <Button color="primary"  onClick={onClick(id)}>
    {text}
  </Button>
);

Primary.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Primary;
