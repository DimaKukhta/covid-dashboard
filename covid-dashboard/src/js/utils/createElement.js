/**
 * @param {String} el
 * @param {String} classNames
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @param  {...array} dataAttr
 */
export default function createElement(el, classNames, child, parent, ...dataAttr) {
  const element = document.createElement(el);

  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }

  if (child && Array.isArray(child)) {
    child.forEach((childElem) => childElem && element.append(childElem));
  } else if (child && typeof child === 'object') {
    element.append(child);
  } else if (child && typeof child === 'string') {
    element.textContent = child;
  }

  if (parent) {
    parent.append(element);
  }

  if (dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      element.setAttribute(attrName, attrValue);
    });
  }

  return element;
}
