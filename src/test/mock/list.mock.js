
import {secondaries} from "./secondary.mock";

const mock_list = [{
  id: '1',
  text: 'Fancy pants',
  images: ['img:7']
}];

const mock_list2 = [{
  id: '2',
  text: 'Facony Pants 2!',
  images: ['img:1', 'img:2']
}, {
  id: '3',
  text: 'Man pants',
  images: ['img:1', 'img:3']
}];

const mock_list3 = [{
  id: '4',
  text: 'Super Nice Pants!',
  images: ['img:1', 'img:2']
}, {
  id: '5',
  text: 'Long Superman Pants',
  images: ['img:1', 'img:3']
}, {
  id: '6',
  text: 'Short Shorts',
  images: ['imd:5', 'img6']
}];

const mock_super_list = [{
  id: secondaries[1].secondary[0].filters[0].id,
  data: mock_list
}, {
  id: secondaries[1].secondary[0].filters[1].id,
  data: mock_list2
}, {
  id: secondaries[1].secondary[1].filters[0].id,
  data: mock_list3
}];

export {mock_super_list, mock_list, mock_list2, mock_list3};
