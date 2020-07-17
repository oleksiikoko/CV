import React from "react";
import { screen, render } from "@testing-library/react";

import { CvContent } from "containers";
import { renderWithRedux } from "redux/test-utils";

it("CvContent cv", () => {
  renderWithRedux(
    <CvContent
      curPage={0}
      screenVersion={{ mobile: false, tablet: false, desktop: false }}
    />
  );
  expect(screen.queryByTestId("cv-content-container")).toBeTruthy();
  expect(screen.queryByTestId("cv-content")).toBeTruthy();
  expect(screen.queryByTestId("motivation-container")).not.toBeTruthy();
});

it("CvContent motivation", () => {
  renderWithRedux(
    <CvContent
      curPage={1}
      screenVersion={{ mobile: false, tablet: false, desktop: false }}
    />
  );
  expect(screen.queryByTestId("cv-content-container")).toBeTruthy();
  expect(screen.queryByTestId("cv-content")).not.toBeTruthy();
  expect(screen.queryByTestId("motivation-container")).toBeTruthy();
});
