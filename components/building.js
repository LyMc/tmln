import { formatResource } from '../utils';
import { createElement } from '../utils/dom.js';
import { types } from '../data';

const create = (type) => {
  const building = type;
  const resource = types.resources[building.resourceId];
  const $element = createElement('span', {
    title: building.description,
    className: 'info-available',
  });

  const render = () => {
    $element.textContent = `${building.icon} ${formatResource(building.speed)}${
      resource.icon
    }/s`;
  };
  render();

  return {
    $element,
  };
};

export default { create };
