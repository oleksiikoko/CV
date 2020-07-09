import { getFirstElementByClassName } from "utils";

const calculateGifHeightInsideBlockWidth = (gifPreview, inside) => {
  let gifPreviewImg = new Image();
  gifPreviewImg.src = gifPreview;
  return (gifPreviewImg.onload = () => {
    const portfolioItemWidth = getFirstElementByClassName(inside).width;
    return gifPreviewImg.height * (portfolioItemWidth / gifPreviewImg.width);
  });
};

export default calculateGifHeightInsideBlockWidth;
