const getFirstElementByClassName = (nameOfClass) => {
  return document
    .getElementsByClassName(nameOfClass)[0]
    .getBoundingClientRect();
};

export default getFirstElementByClassName;
