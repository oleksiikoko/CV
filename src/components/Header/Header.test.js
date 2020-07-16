import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Header } from "components";

afterEach(cleanup);

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("container render", () => {
    expect(screen.queryByTestId("header")).toBeTruthy();
    expect(screen.queryByTestId("header")).toHaveClass("header");
  });

  it("name", () => {
    expect(screen.queryByText("Oleksii Kovalchuk")).toBeTruthy();
    expect(screen.queryByText("Oleksii Kovalchuk")).toHaveClass("header__name");
  });

  it("position", () => {
    expect(screen.queryByText("Frontend Developer")).toBeTruthy();
    expect(screen.queryByText("Frontend Developer")).toHaveClass(
      "header__position"
    );
  });
});
