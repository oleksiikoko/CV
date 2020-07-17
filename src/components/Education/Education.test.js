import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";

import { Education } from "components";

afterEach(cleanup);

describe("Education", () => {
  const items = [
    {
      text: "Unit Factory pool",
      description:
        "Was engaged in an intensive boot camp of C language course where everyone learns himself to work with strict deadlines and self-planning. Basics of networking. Introduction to Unix",
    },
    {
      text: 'NTUU "Igor Sikorsky Kyiv Polytechnic Institute"',
    },
  ];

  beforeEach(() => {
    render(<Education items={items} />);
  });

  it("items have class", () => {
    screen.getAllByTestId("education-item").map((item) => {
      expect(item).toHaveClass("education-item");
    });
  });

  it("DescriptionBox count", () => {
    expect(screen.queryAllByTestId("description")).toHaveLength(
      items.length * 2 - 1
    );
  });
});
