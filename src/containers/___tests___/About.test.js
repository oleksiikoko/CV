import React from "react";
import { render, screen } from "utils/test-utils";
import "@testing-library/jest-dom/extend-expect";

import { About } from "containers";

test("About can render with redux with defaults", () => {
  render(<About />);
  expect(screen.getByTestId("about-container")).toBeTruthy();
});
