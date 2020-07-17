import React from "react";
import { screen, render } from "@testing-library/react";

import { CvContent } from "containers";

let initialState;

it("CvContent cv", () => {
  initialState = {
    main: {
      page: 0,
      screenVersion: { mobile: false, tablet: false, desktop: false },
    },
  };
  render(
    <CvContent
      page={0}
      screenVersion={{ mobile: false, tablet: false, desktop: false }}
    />
  );
  expect(screen.queryByTestId("cv-content-container")).toBeTruthy();
  expect(screen.queryByTestId("cv-content")).toBeTruthy();
});

it("CvContent motivation", () => {
  render(
    <CvContent
      page={1}
      screenVersion={{ mobile: false, tablet: false, desktop: false }}
    />
  );
  expect(screen.queryByTestId("cv-content-container")).toBeTruthy();
  expect(screen.queryByTestId("motivation-container")).toBeTruthy();
});
