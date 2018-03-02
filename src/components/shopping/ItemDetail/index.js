import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addItemToCart} from "../../../redux/actions/actions";
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import styles from './index.scss';

const ItemDetail = ({id, text, images, handleItemClick}) => (
  <Card className={styles.ItemDetail}>
    {text}
    <button onClick={() => handleItemClick(id)}>Buy</button>
  </Card>
);

ItemDetail.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.array
};

const mapStateToProps = state => state.filters.active.item || {};

const mapDispatchToProps = (dispatch) => ({
  handleItemClick: (item) => {
    bindActionCreators(addToCart, dispatch)(item)
  }
});

function addToCart(item_id) {
  return (dispatch, getState) => {
   const active = getState().filters.active.item;
   if (active.id !== item_id) {
     console.warn('Item clicked was not active item. (id, active)', item_id, active)
   }

   dispatch(addItemToCart(active))
  }
}

export {ItemDetail, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(ItemDetail)
