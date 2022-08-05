import { types } from '../data';
import { createElement } from '../utils/dom.js';
import time from './time.js';
import building from './building.js';
import resource from './resource.js';
import $actions from './actions.js';

const $app = document.querySelector('#🧩');

const farmBuilding = building.create(types.buildings.farm);
const wheatResource = resource.create(types.resources.wheat);
const cityBuilding = building.create(types.buildings.city);
const personResource = resource.create(types.resources.person);

const $list1 = createElement('ul', {
  children: [
    createElement('li', { children: [farmBuilding.$element] }),
    createElement('li', { children: [wheatResource.$element] }),
  ],
});
const $list2 = createElement('ul', {
  children: [
    createElement('li', { children: [cityBuilding.$element] }),
    createElement('li', { children: [personResource.$element] }),
  ],
});
const $title = createElement('h1', { children: [time.$element, ' - Tmln'] });

$app.append($title, $list1, $list2, $actions);
