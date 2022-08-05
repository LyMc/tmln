import { createElement } from '../utils/dom.js';
import game from '../engine/game.js';

const $start = createElement('button', {
  textContent: '▶️ Start',
  onclick: () => game.start(),
});
const $stop = createElement('button', {
  textContent: '⏹️ Stop',
  onclick: () =>
    game.stop(`There is still more wheat to collect. Better luck next time!`),
});
const $element = createElement('div', {
  children: [$start, $stop],
});

const render = () => {
  $start.disabled = game.isRunning;
  $stop.disabled = !game.isRunning;
};

render();

game.addListener(() => {
  render();
  return render;
});

export default $element;
