import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({id, text, total}) => (
  <div>
    {text} : {total}
  </div>
);

CartItem.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default CartItem;
