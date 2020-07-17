import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";

import { About } from "containers";

const initialState = {
  // state: {
  main: {
    page: 0,
    screenVersion: { mobile: false, tablet: false, desktop: false },
  },
  about: { text: "testText", loading: true },
  // },
};

it("About can render with redux with defaults", () => {
  renderWithRedux(<About />, { initialState: initialState });
  expect(screen.getByTestId("about-container")).toBeTruthy();
});
