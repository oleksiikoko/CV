import React from "react";
import { render, cleanup, screen, fireEvent } from "@testing-library/react";

import { ToolItem } from "components";
import { getIcon } from "utils";

afterEach(cleanup);

describe("ToolItem", () => {
  const icon = getIcon("heroku");
  const onClick = jest.fn();

  beforeEach(() => {
    render(<ToolItem icon={icon} text="testText" onClick={onClick} />);
  });

  it("container render", () => {
    expect(screen.queryByTestId("tool-item")).toBeTruthy();
    expect(screen.queryByTestId("tool-item")).toHaveClass(
      "tool box flex-raw-container jc-center ai-center"
    );
  });

  it("text render", () => {
    expect(screen.queryByText("testText")).toBeTruthy();
  });

  it("click", () => {
    fireEvent.click(screen.queryByTestId("tool-item"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
