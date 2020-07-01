const getImgWidth = (img) => {
  let newImg = new Image();
  newImg.src = img;
  return newImg.width;
};

export default getImgWidth;
