import React from "react";
import { render, fireEvent } from "@testing-library/react";

import BlockTitle from "./index";

it("renders correctly", () => {
  const { queryByTestId } = render(<BlockTitle text="test" />);
  expect(queryByTestId("title")).toBeTruthy();
});
