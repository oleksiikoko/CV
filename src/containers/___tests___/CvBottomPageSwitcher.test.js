import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";

import { CvBottomPageSwitcher } from "containers";

const initialState = {
  // state: {
  main: { page: 0 },
  // },
};

it("CvBottomPageSwitcher", () => {
  renderWithRedux(<CvBottomPageSwitcher />, initialState);
  expect(screen.queryByTestId("bottom-page-switcher")).toBeTruthy();
});
