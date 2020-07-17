import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";

import { CvContainer } from "containers";

const initialState = {
  main: {
    page: 0,
    screenVersion: { mobile: false, tablet: false, desktop: false },
  },
};

it("CvContainer", () => {
  renderWithRedux(<CvContainer />, initialState);
  expect(screen.queryByTestId("cv-container")).toBeTruthy();
  expect(screen.queryByTestId("cv-content")).toBeTruthy();
  expect(screen.queryByTestId("bottom-page-switcher")).toBeTruthy();
});
