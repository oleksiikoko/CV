const getImgHeight = (img) => {
  let newImg = new Image();
  newImg.src = img;
  return newImg.height;
};

export default getImgHeight;
