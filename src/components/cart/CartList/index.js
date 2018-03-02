import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartItem from "../CartItem/index";

const CartList = ({items}) => (
    <ul>
      {items.map(item => (
        <li key={item.id}><CartItem {...item} /></li>
      ))}
    </ul>
);

CartList.proptypes = {
  items: PropTypes.array
};

const mapStateToProps = state => ({
  items: state.cart.list
});

const mapDispatchToProps = dispatch => ({});

export {CartList, mapStateToProps, mapDispatchToProps};
export default connect(mapStateToProps, mapDispatchToProps)(CartList);
