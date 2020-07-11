import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { PortfolioItems } from "components";
import { gif } from "assets/testData/base64.gif.json";

afterEach(cleanup);

describe("render", () => {
  const portfolioItems = [
    {
      _id: "testId",
      projectName: "testName",
      description: "testDescription",
      links: [
        {
          url: "testUrl",
          color: "testColor",
          iconId: "heroku",
          name: "testNamelink",
        },
        {
          url: "testUrl",
          color: "testColor",
          iconId: "heroku",
          name: "testNamelink",
        },
      ],
      gif: gif,
    },
    {
      _id: "testId",
      projectName: "testName",
      description: "testDescription",
      links: [
        {
          url: "testUrl",
          color: "testColor",
          iconId: "heroku",
          name: "testNamelink",
        },
        {
          url: "testUrl",
          color: "testColor",
          iconId: "heroku",
          name: "testNamelink",
        },
      ],
      gif: gif,
    },
  ];

  beforeEach(() => {
    render(<PortfolioItems portfolioItems={portfolioItems} />);
  });

  it("portfolio-items container rendered", () => {
    expect(screen.queryByTestId("portfolio-items")).toBeTruthy();
  });

  it("portfolio-items container have class", () => {
    expect(screen.queryByTestId("portfolio-items")).toHaveClass(
      "portfolio__ul"
    );
  });

  it("portfolio-items container have class", () => {
    expect(screen.getAllByTestId("portfolio-item")).toHaveLength(2);
  });
});
