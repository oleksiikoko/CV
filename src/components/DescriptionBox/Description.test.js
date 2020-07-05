import React from "react";
import { render } from "@testing-library/react";

import Description from "./index";

describe("Description test", () => {
  it(`<BlockTitle text="test" />`, () => {
    const { queryByTestId, getByText } = render(
      <Description description="<p>test</p>" />
    );

    expect(queryByTestId("description")).toHaveAttribute(
      "class",
      "description"
    );
    expect(getByText("test")).toBeTruthy();
  });
});
