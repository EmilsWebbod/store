/**
 * Sections the filters into smaller parts. So you can undergroup them in list.
 * The list items can be mixed with other primaries and filterss can be mixed with other secondaries.
 * So you Only create a filters once and then link them together when items are added.
 */

/**
 * You can ADD data. But don't REMOVE. Test checks lengths
 */
// For Daily
const daily = [
  {
    id: '10',
    text: 'Head',
    filters: [
      {
        id: '100',
        text: 'Cap',
        list: []
      }, {
        id: '101',
        text: 'Hat'
      }
    ]
  },
  {
    id: '11',
    text: 'Legs',
    filters: [
      {
        id: '102',
        text: 'Shorts'
      }
    ]
  }
];

const training = [
  {
    id: '11',
    text: 'Legs',
    filters: [
      {
        id: '102',
        text: 'Shorts'
      },
      {
        id: '103',
        text: 'Pants'
      }
    ]
  },
  {
    id: '13',
    text: 'Arms',
    filters: [
      {
        id: '320',
        text: 'Watch'
      }
    ]
  }
];

const party = [
  {
    id: '12',
    text: 'Body',
    filters: [
      {
        id: '104',
        text: 'Shirt'
      },
      {
        id: '105',
        text: 'Dress'
      }
    ]
  }
];

const outdoor = [
  {
    id: '12',
    text: 'Body',
    filters: [
      {
        id: '104',
        text: 'Shirt'
      },
      {
        id: '105',
        text: 'Dress'
      }
    ]
  }
];

const secondary = [
  {
    id: '12',
    text: 'Dress',
    filters: [
      {
        id: '110',
        text: 'Skinny'
      },
      {
        id: '111',
        text: 'Long'
      }
    ]
  }
];

// Used to Mock api and get correct data
const secondaries = [{
  id: '0',
  secondary: daily
}, {
  id: '1',
  secondary: training
}, {
  id: '2',
  secondary: party
}, {
  id: '3',
  secondary: secondary
}, {
  id: '4',
  secondary: outdoor
}];

export {secondaries, secondary};
