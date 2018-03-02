import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.scss';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from 'material-ui-icons/Favorite';
import CartOutline from 'material-ui-icons/AddShoppingCart';


const Item = ({id, text, onClick}) => (
  <Card className={styles.Item}>
    <CardMedia
      className={styles.media}
      image="/images/man_white_background.jpg"
      title="Contemplative Reptile"
    />
    <CardContent>
      <Typography variant="headline" component="h3">
        Item
      </Typography>
      <Typography component="p">
        {text}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton aria-label="Add To Drift" onClick={onClick}><FavoriteIcon /></IconButton>
      <IconButton aria-label="Add to Cart"><CartOutline /></IconButton>
    </CardActions>
  </Card>
);

Item.proptypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
