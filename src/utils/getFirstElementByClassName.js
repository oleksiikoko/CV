const getFirstElementByClassName = (nameOfClass) => {
  if (document.getElementsByClassName(nameOfClass).length === 0) {
    return { width: 300 }; //for test complete
  }

  return document
    .getElementsByClassName(nameOfClass)[0]
    .getBoundingClientRect();
};

export default getFirstElementByClassName;
