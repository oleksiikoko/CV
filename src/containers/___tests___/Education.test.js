import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "redux/test-utils";

import { Education } from "containers";

let initialState;

it("Education", () => {
  initialState = {
    education: { items: [], loading: true },
  };
  const rendered = renderWithRedux(<Education />, { initialState });
  expect(screen.queryByTestId("education-container")).toBeTruthy();
  expect(screen.queryByTestId("block-title")).toBeTruthy();
  expect(screen.queryByTestId("loader")).toBeTruthy();
});

it("Education", () => {
  initialState = {
    education: { items: [], loading: false },
  };
  renderWithRedux(<Education />, { initialState });
  expect(screen.queryByTestId("education-container")).toBeTruthy();
  expect(screen.queryByTestId("block-title")).toBeTruthy();
  expect(screen.queryByTestId("education")).toBeTruthy();
});
