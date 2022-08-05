const $app = document.querySelector('#🧩');

export const createElement = (type, { children, ...props } = {}) => {
  const $element = document.createElement(type);
  Object.entries(props).forEach(([key, value]) => {
    $element[key] = value;
  });
  if (children) {
    $element.append(...children);
  }
  return $element;
};
