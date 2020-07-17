import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Portfolio } from "containers";

const initialState = {
  // state: {
  main: {
    page: 0,
    screenVersion: { mobile: false, tablet: false, desktop: false },
  },
  about: { text: "testText", loading: true },
  portfolio: {
    items: [],
    loading: true,
  },
  // },
};

test("can render with redux with defaults", () => {
  renderWithRedux(<Portfolio />, initialState);
  expect(screen.getByTestId("portfolio")).toBeTruthy();
});
