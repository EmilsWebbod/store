import React from 'react';
import Grid from "material-ui/Grid";
import SecondaryList from "../../components/filters/SecondaryList/index";

import styles from './index.scss';

class Filter extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid item xs={3}>
          <img src="#" alt="Large image of Category" className={styles.Img} />
        </Grid>
        <Grid item xs={9}>
          <SecondaryList/>
        </Grid>
      </Grid>
    )
  }
}

export default Filter;
