import React from "react";
import { render } from "@testing-library/react";

import About from "./index";

describe("About component tests: ", () => {
  it("<About mobile={true} show={true} text='test' loading='true'/>", () => {
    const { queryByTestId } = render(
      <About mobile={true} show={true} text="test" loading={true} />
    );
    expect(queryByTestId("about-container")).toHaveClass("about-container");
    expect(queryByTestId("title")).toBeTruthy();
  });
});
