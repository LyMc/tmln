const speed = 1; // for debugging only
let isRunning = false;
let startDate = 0;
let duration = 0; // time since game started
const listeners = [];
let stopListeners = [];

const addListener = (listener) => {
  listeners.push(listener);
};
const start = () => {
  startDate = Date.now();
  isRunning = true;
  run();
  listeners.forEach((listener) => {
    stopListeners.push(listener());
  });
};
const stop = (result) => {
  isRunning = false;
  stopListeners.forEach((listener) => listener());
  stopListeners = [];
  alert(result);
};
const run = () => {
  duration = (Date.now() - startDate) * speed;
  isRunning && requestAnimationFrame(run);
};

export default {
  get isRunning() {
    return isRunning;
  },
  get duration() {
    return duration;
  },
  addListener,
  start,
  stop,
};
