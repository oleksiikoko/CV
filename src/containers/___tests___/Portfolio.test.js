import React from "react";
import { render, screen } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { Portfolio } from "containers";

test("can render with redux with defaults", () => {
  render(<Portfolio />);
  expect(screen.getByTestId("portfolio")).toBeTruthy();
});
