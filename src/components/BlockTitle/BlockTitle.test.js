import React from "react";
import { render } from "@testing-library/react";

import BlockTitle from "./index";

describe("BlockTitle test", () => {
  it(`<BlockTitle text="test" />`, () => {
    const { queryByTestId, getByText } = render(<BlockTitle text="test" />);
    expect(queryByTestId("block-title")).toHaveAttribute(
      "class",
      "title p20 pb5 title--center"
    );
    expect(getByText("test")).toBeTruthy();
  });

  it(`<BlockTitle text="test" inCvBlock />`, () => {
    const { queryByTestId, getByText } = render(
      <BlockTitle text="test" inCvBlock />
    );
    expect(queryByTestId("block-title")).toHaveAttribute(
      "class",
      "title p20 pb5"
    );
    expect(getByText("test:")).toBeTruthy();
  });

  it(`<BlockTitle text="test" inCvBlock dash />`, () => {
    const { queryByTestId, getByText } = render(
      <BlockTitle text="test" inCvBlock dash />
    );
    expect(queryByTestId("block-title")).toHaveAttribute(
      "class",
      "title p20 pb5"
    );
    expect(getByText("test -")).toBeTruthy();
  });
});
