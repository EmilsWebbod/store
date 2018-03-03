import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {apiGetFilters, apiGetPrimaries} from "../../redux/reducers/api/api.store";
import {connect} from "react-redux";

import PrimaryList from '../../components/filters/PrimaryList/index';
import SecondaryList from '../../components/filters/SecondaryList/index';
import Filters from "../../components/filters/Filters/index";
import TabList from "../../components/shopping/TabList/index";
import ItemList from "../../components/shopping/ItemList/index";
import DriftList from "../../components/shopping/DriftList/index";
import ItemDetail from "../../components/shopping/ItemDetail/index";
import CartList from "../../components/cart/CartList/index";

import styles from '../../styles/global.scss';

class Store extends Component {

  componentDidMount() {
    this.props.getPrimaries();
    this.props.getFilters();
  }

  render() {
    return (
      <section>
        <PrimaryList />
        <TabList />
        <SecondaryList />
        <Filters />


        <h3>Tabs</h3>

        <h3>Items</h3>
        <ItemList />

        <h3>Drift</h3>
        <DriftList />

        <h3>Item</h3>
        <ItemDetail/>

        <h3>Cart</h3>
        <CartList />
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getPrimaries: bindActionCreators(apiGetPrimaries, dispatch),
    getFilters: bindActionCreators(apiGetFilters, dispatch)
  }
}

export {Store, mapDispatchToProps};
export default connect(() => {return {}}, mapDispatchToProps)(Store);
