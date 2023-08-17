function newElement(tag, className, text) {
  const element = document.createElement(tag);
  element.className = className;
  element.innerHTML = text;
  return element;
}

export default newElement; 