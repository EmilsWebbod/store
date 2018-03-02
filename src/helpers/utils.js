

export const withId = (id) => (el) => el.id === id;

export const arrayRemove = (arr, i) => {
  return [
    ...arr.slice(0, i),
    ...arr.slice(i + 1)
  ]
};

export const arrayAddEl = (arr, el) => {
  if (arr.findIndex(withId(el.id)) !== -1) {
    console.warn('Element already exist in array: ', arr, el);
    return arr;
  }
  return [...arr, el];
};

export const arrayRemoveEl = (arr, el) => {
  const i = arr.findIndex(withId(el.id));
  if ( i === -1 ) {
    console.warn('Could not find element in Array: ', arr, el);
    return arr;
  }
  return arrayRemove(arr, i);
};

export const getIndexFrom2dArray = (arr, id) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {
      if (arr[i][j].id === id) { return {i: i, j: j}; }
    }
  }
  return {i: -1, j: -1};
};

export const getIndexFromPropOf2dArray = (arr, prop, id) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i][prop].length; j++) {
      if (arr[i][prop][j].id === id) {return {i: i, j: j}}
    }
  }
  return {i: -1, j: -1};
};

