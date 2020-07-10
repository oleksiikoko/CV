import { getFirstElementByClassName } from "utils";

function calculateGifHeightInsideBlockWidth(gifHeight, gifWidth, inside) {
  const portfolioItemWidth = getFirstElementByClassName(inside).width;

  return gifHeight * (portfolioItemWidth / gifWidth);
}

export default calculateGifHeightInsideBlockWidth;
