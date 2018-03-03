import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

import styles from './index.scss';

const Carousel = ({images}) => (
  <Grid container>
    <Grid item xs={2}>
      <Grid container direction="column" justify="flex-start" alignItems="flex-start">
        {images.map(image => (
          <Grid item>
            <img src="" alt="Item Image" className={styles.Img} />
          </Grid>
        ))}
      </Grid>
    </Grid>
    <Grid item xs={10}>
      <img src="" alt="Item Image" className={styles.Img} />
    </Grid>
  </Grid>
);

Carousel.proptypes = {
  images: PropTypes.array.isRequired
};

export default Carousel;
