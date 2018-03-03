import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addItemToCart} from "../../../redux/actions/actions";

import Grid from 'material-ui/Grid';

import styles from './index.scss';
import Carousel from "../../global/images/Carousel/index";
import Typography from "material-ui/Typography/Typography";
import Button from "material-ui/Button/Button";

const ItemDetail = ({id, text, images, handleItemClick}) => (
  <div>
    { id ? (
      <Grid container>
        <Grid item xs={6}>
          <Carousel images={images} />
        </Grid>
        <Grid item xs={6}>
        <Typography variant="headline">
        Item Headline
        </Typography>
        <Typography variant="body2" >
        {text}
        </Typography>
        <Button variant="raised" color="primary" onClick={() => handleItemClick(id)}>Buy</Button>
        </Grid>
      </Grid>
    ) : (
      <div>
        No item selected
      </div>
    )}
  </div>
);

ItemDetail.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  images: PropTypes.array
};

const mapStateToProps = state => state.filters.active.item;

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
