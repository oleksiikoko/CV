import React from "react";
import { render, cleanup } from "@testing-library/react";

import Loader from "./index";

afterEach(cleanup);

describe("<Loader /> component test", () => {
  let rendered;
  beforeEach(() => {
    rendered = render(<Loader />);
  });

  it("render test", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("loader")).toBeTruthy();
  });

  it("className test", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("loader")).toHaveClass("lds-roller");
  });

  it("tab(div) count contains", () => {
    const { queryAllByRole } = rendered;
    expect(queryAllByRole("tab")).toHaveLength(8);
  });
});
