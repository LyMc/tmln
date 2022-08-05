import { createElement } from '../utils/dom.js';
import { formatNumber } from '../utils';
import game from '../engine/game.js';

const $status = createElement('span');
const $min = createElement('span');
const $sec = createElement('span');
const $ms = createElement('span', { className: 'milliseconds' });
const $element = createElement('span', {
  children: [$status, ' ', $min, ':', $sec, $ms],
});

let isRunning = false;

const render = () => {
  const min = Math.floor(game.duration / 1000 / 60);
  const sec = Math.floor(game.duration / 1000) % 60;
  const ms = Math.floor(game.duration % 1000);
  $min.textContent = formatNumber(min, 2);
  $sec.textContent = formatNumber(sec, 2);
  $ms.textContent = formatNumber(ms, 3);
  $status.textContent = game.isRunning ? '▶️' : '⏹️';
  isRunning && requestAnimationFrame(render);
};

render();

game.addListener(() => {
  isRunning = true;
  render();
  return () => {
    isRunning = false;
  };
});

export default {
  $element,
};
