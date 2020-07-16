import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Tools } from "components";
import { getIcon } from "utils";

afterEach(cleanup);

describe("Tools", () => {
  const icon = getIcon("heroku");

  beforeEach(() => {
    render(<Tools />);
  });

  it("container render", () => {
    expect(screen.queryByTestId("tools")).toBeTruthy();
    expect(screen.queryByTestId("tools")).toHaveClass("tools-container");
  });

  it("tool-item render", () => {
    expect(screen.queryAllByTestId("tool-item")).toHaveLength(2);
  });

  it("download <a></a>", () => {
    expect(screen.queryByText("download-pdf")).toHaveAttribute(
      "href",
      "http://192.168.1.12:3002/download-pdf"
    );
    expect(screen.queryByText("download-pdf")).toHaveAttribute(
      "id",
      "download-pdf"
    );
    expect(screen.queryByText("download-pdf")).toHaveAttribute(
      "download",
      "download-pdf"
    );
  });
});
