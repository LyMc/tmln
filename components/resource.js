import { formatResource } from '../utils';
import { createElement } from '../utils/dom.js';
import { types } from '../data';
import game from '../engine/game.js';

const create = (type) => {
  let isRunning = false;
  let calcInterval;
  const calcSpeed = 1;
  const resource = type;
  const source = types.sources[resource.sourceId];
  const building = types.buildings[resource.buildingId];
  const $element = createElement('span', {
    title: resource.description,
    className: 'info-available',
  });

  const calc = () => {
    if (!source || resource.total < source.total) {
      resource.total += building.speed / calcSpeed;
    }
    if (source && resource.total >= source.total) {
      resource.total = source.total;
      game.stop('You collected all the wheat and won this game!');
    }
  };

  const render = () => {
    $element.textContent = `${resource.icon} ${formatResource(
      Math.round(resource.total)
    )}`;
    if (source) {
      $element.textContent += `/${formatResource(source?.total)}`;
    }

    isRunning && requestAnimationFrame(render);
  };

  game.addListener(() => {
    resource.total = 0;
    isRunning = true;
    render();
    calcInterval = setInterval(calc, 1000 / calcSpeed);
    return () => {
      isRunning = false;
      clearInterval(calcInterval);
    };
  });

  render();

  return {
    $element,
  };
};

export default { create };
