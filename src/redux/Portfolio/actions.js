import {
  REQUEST_PORTFOLIO,
  SHOW_PORTFOLIO_LOADER,
  HIDE_PORTFOLIO_LOADER,
} from "./types";

export function showPortfolioLoader() {
  return {
    type: SHOW_PORTFOLIO_LOADER,
  };
}

export function hidePortfolioLoader() {
  return {
    type: HIDE_PORTFOLIO_LOADER,
  };
}

export const fetchPortfolio = () => {
  return {
    type: REQUEST_PORTFOLIO,
  };
};
