import React, { Component } from 'react';

import PrimaryList from '../../components/filters/PrimaryList/index';
import TabList from "../../components/shopping/TabList/index";


class Store extends Component {

  render() {
    const {children} = this.props;
    return (
      <section>
        <PrimaryList />
        <TabList />
        {children}
      </section>
    )
  }
}

export default Store;
