import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Item from "../Item/index";
import {bindActionCreators} from "redux";
import {addShoppingDrift} from "../../../redux/actions/actions";
import GridList, { GridListTile } from 'material-ui/GridList';

const ItemList = ({items, handleItemClick}) => (
  <GridList cellHeight={400} cols={3}>
    {items.map(item => (
      <GridListTile key={item.id} cols={1}>
        <Item {...item} onClick={() => handleItemClick(item)}/>
      </GridListTile>
    ))}
  </GridList>
);

ItemList.proptype = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  items: state.shopping.list
});

const mapDispatchToProps = dispatch => ({
  handleItemClick: (item) => { bindActionCreators((_item) => {
    return (_dispatch, getState) => {
      const {filter} = getState().filters.active;
      _dispatch(addShoppingDrift(filter, _item))
    }
  }, dispatch)(item)}
});

export {ItemList, mapStateToProps, mapDispatchToProps}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
