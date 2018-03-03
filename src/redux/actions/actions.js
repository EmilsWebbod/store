
// Page headers
export const ACTIVE_SET_CATEGORY = 'ACTIVE_SET_CATEGORY';
export const ACTIVE_CLEAR_CATEGORY = 'ACTIVE_CLEAR_CATEGORY';
export const ACTIVE_SET_FILTER = 'ACTIVE_SET_FILTER';
export const ACTIVE_CLEAR_FILTER = 'ACTIVE_CLEAR_FILTER';
export const ACTIVE_SET_ITEM = 'ACTIVE_SET_ITEM';
export const ACTIVE_SET_PRIMARY = 'ACTIVE_SET_PRIMARY';

export function setActiveCategory(category) {
  return {
    type: ACTIVE_SET_CATEGORY,
    category: category
  }
}

export function clearActiveCategory() {
  return {
    type: ACTIVE_CLEAR_CATEGORY
  }
}

export function setActiveFilter(filter) {
  return {
    type: ACTIVE_SET_FILTER,
    filter: filter
  }
}

export function clearActiveFilter() {
  return {
    type: ACTIVE_CLEAR_FILTER
  }
}

export function setActiveItem(item) {
  return {
    type: ACTIVE_SET_ITEM,
    item: item
  }
}

export function setActivePrimary(primary) {
  return {
    type: ACTIVE_SET_PRIMARY,
    primary: primary
  }
}

// FILTERS
export const FILTER_CLEAR_PRIMARY = 'FILTER_CLEAR_PRIMARY';
export const FILTER_SET_PRIMARY = 'FILTER_SET_PRIMARY';
export const FILTER_SET_SECONDARY_TO_PRIMARY = 'FILTER_SET_SECONDARY_TO_PRIMARY';

export function setFilterPrimary(primaries) {
  return {
    type: FILTER_SET_PRIMARY,
    primaries: primaries
  }
}

export function setFilterSecondaryToPrimary(primary, secondary) {
  return {
    type: FILTER_SET_SECONDARY_TO_PRIMARY,
    primary_id: primary.id || primary,
    secondary: secondary
  }
}

export function clearFilterPrimary() {
  return {
    type: FILTER_CLEAR_PRIMARY
  }
}


// SECONDARY
export const FILTER_CLEAR_SECONDARY = 'FILTER_CLEAR_SECONDARY';
export const FILTER_SET_SECONDARY = 'FILTER_SET_SECONDARY';
export const FILTER_TOGGLE_SECONDARY_FILTER = 'FILTER_TOGGLE_SECONDARY_FILTER';
export const FILTER_TOGGLE_SECONDARY = 'FILTER_TOGGLE_SECONDARY';

export function setFilterSecondary(secondaries) {
  return {
    type: FILTER_SET_SECONDARY,
    secondaries: secondaries
  }
}

export function clearFilterSecondary() {
  return {
    type: FILTER_CLEAR_SECONDARY
  }
}

export function toggleSecondary(secondary_id) {
  return {
    type: FILTER_TOGGLE_SECONDARY,
    secondary_id: secondary_id
  }
}

export function toggleFilterSecondary(secondary_i, filter_i) {
  return {
    type: FILTER_TOGGLE_SECONDARY_FILTER,
    secondary_i: secondary_i,
    filter_i: filter_i
  }
}

// FILTERS
export const FILTER_SET_FILTERS = 'FILTER_SET_FILTERS';
export const FILTER_CLEAR_FILTERS = 'FILTER_CLEAR_FILTERS';
export const FILTER_TOGGLE_FILTERS = 'FILTER_TOGGLE_FILTERS';
export const FILTER_SET_LIST_TO_FILTER = 'FILTER_SET_LIST_TO_FILTER';

export function setFilterFilter(filters) {
  return {
    type: FILTER_SET_FILTERS,
    filters: filters
  }
}

export function clearFilterFilter() {
  return {
    type: FILTER_CLEAR_FILTERS
  }
}

export function toggleFilterFilter(option_id) {
  return {
    type: FILTER_TOGGLE_FILTERS,
    option_id: option_id
  }
}

export function setShoppingListToFilter(filter_id, list) {
  return {
    type: FILTER_SET_LIST_TO_FILTER,
    filter_id: filter_id,
    list: list
  }
}

// LIST

export const SHOPPING_SET_LIST = 'SHOPPING_SET_LIST';
export const SHOPPING_PUSH_LIST = 'SHOPPING_PUSH_LIST';
export const SHOPPING_CLEAR_LIST = 'SHOPPING_CLEAR_LIST';

export function setShoppingList(list, filter) {
  return {
    type: SHOPPING_SET_LIST,
    list: list,
    filter: filter
  }
}

export function pushShoppingList(list) {
  return {
    type: SHOPPING_PUSH_LIST,
    list: list
  }
}

export function clearShoppingList() {
  return {
    type: SHOPPING_CLEAR_LIST
  }
}

export const SHOPPING_ADD_DRIFT = 'SHOPPING_ADD_DRIFT';
export const SHOPPING_REMOVE_DRIFT = 'SHOPPING_REMOVE_DRIFT';
export const SHOPPING_SET_DRIFT = 'SHOPPING_SET_DRIFT';
export const SHOPPING_CLEAR_DRIFT = 'SHOPPING_CLEAR_DRIFT';

export function addShoppingDrift(filter_header, item) {
  return {
    type: SHOPPING_ADD_DRIFT,
    filter: filter_header,
    item: item
  }
}

export function removeShoppingDrift(item_id) {
  return {
    type: SHOPPING_REMOVE_DRIFT,
    item_id: item_id
  }
}

export function setShoppingDrift(drift) {
  return {
    type: SHOPPING_SET_DRIFT,
    drift: drift
  }
}

export function clearShoppingDrift() {
  return {
    type: SHOPPING_CLEAR_DRIFT
  }
}

// CART

export const CART_ADD_ITEM = 'CART_ADD_ITEM';

export const addItemToCart = (item) => ({
  type: CART_ADD_ITEM,
  item: item
});
