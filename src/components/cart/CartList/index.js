import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CartItem from "../CartItem/index";
import List, { ListItem } from 'material-ui/List';
import styles from './index.scss';

const CartList = ({items}) => (
    <List>
      {items.map(item => (
        <ListItem key={item.id} className={styles.CartListItem}>
          <CartItem {...item} />
        </ListItem>
      ))}
    </List>
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
