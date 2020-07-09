import React from "react";
import { render, cleanup } from "@testing-library/react";

import { PortfolioButtonsContainer } from "containers";

afterEach(cleanup);

describe("<PortfolioButtonsContainer items={items} />", () => {
  const items = [
    {
      url: "testUrl",
      color: "testColor",
      iconId: "heroku",
      name: "testName",
    },
    {
      url: "testUrl",
      color: "testColor",
      iconId: "heroku",
      name: "testName",
    },
  ];
  let rendered;
  beforeEach(() => {
    rendered = render(<PortfolioButtonsContainer items={items} />);
  });

  it("container exist ", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("buttons-container")).toBeTruthy();
  });

  it("container className ", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("buttons-container")).toHaveClass(
      "button-container df"
    );
  });

  it("buttons count ", () => {
    const { queryAllByTestId } = rendered;
    expect(queryAllByTestId("button-link")).toHaveLength(2);
  });
});
