import React from "react";
import { render, cleanup } from "@testing-library/react";

import { PortfolioButton } from "components";

afterEach(cleanup);

describe("<PortfolioButton url='testUrl' color='testColor' iconId='testIcon' name='testName' countInLine={2} />", () => {
  let rendered;
  beforeEach(() => {
    rendered = render(
      <PortfolioButton
        url="testUrl"
        color="testColor"
        iconId="heroku"
        name="testName"
        countInLine={2}
      />
    );
  });

  it("<a/> exist", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-link")).toBeTruthy();
  });

  it("<a/> href atribute", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-link")).toHaveAttribute("href", "testUrl");
  });

  it("<a/> target atribute", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-link")).toHaveAttribute("target", "blank");
  });

  it("<a/> className atribute", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-link")).toHaveClass(
      "portfolio__button portfolio__button--testColor"
    );
  });

  it("<svg/> exist", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-icon")).toBeTruthy();
  });

  it("<svg/> inside <a/>", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-icon").closest("a")).toBeTruthy();
  });

  it("<p/> exist", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-text")).toBeTruthy();
  });

  it("<p/> inside <a/>", () => {
    const { queryByTestId } = rendered;
    expect(queryByTestId("button-text").closest("a")).toBeTruthy();
  });

  it("<p/> text", () => {
    const { queryByText } = rendered;
    expect(queryByText("testName")).toBeTruthy();
  });
});
