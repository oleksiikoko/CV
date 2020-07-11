import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { PortfolioItem } from "components";
import { gif } from "assets/testData/base64.gif.json";

afterEach(cleanup);

describe("render", () => {
  const links = [
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
  ];

  describe("gif exist", () => {
    beforeEach(() => {
      render(
        <PortfolioItem
          _id="testId"
          name="testName"
          description="testDesctiprion"
          links={links}
          gif={gif}
        />
      );
    });

    it("portfolio-item container rendered", () => {
      expect(screen.queryByTestId("portfolio-item")).toBeTruthy();
    });

    it("portfolio-item container have class", () => {
      expect(screen.queryByTestId("portfolio-item")).toHaveClass(
        "portfolio__item"
      );
    });

    it("portfolio-href container rendered", () => {
      expect(screen.queryByTestId("portfolio-href")).toBeTruthy();
    });

    it("portfolio-href container have class", () => {
      expect(screen.queryByTestId("portfolio-href")).toHaveAttribute(
        "id",
        "testId"
      );
    });

    it("portfolioItem have name", () => {
      expect(screen.queryByText("testName")).toBeTruthy();
    });

    it("PreviewButton rendered", () => {
      expect(screen.queryByTestId("preview-button-container")).toBeTruthy();
    });

    it("GifPreview rendered", () => {
      expect(screen.queryByTestId("gif-preview")).toBeTruthy();
    });

    it("desctiption rendered", () => {
      expect(screen.queryByTestId("description")).toBeTruthy();
    });

    it("ButtonsContainer container rendered", () => {
      expect(screen.queryByTestId("buttons-container")).toBeTruthy();
    });
  });

  describe("gif undefined", () => {
    beforeEach(() => {
      render(
        <PortfolioItem
          _id="testId"
          name="testName"
          description="testDesctiprion"
          links={links}
        />
      );
    });

    it("portfolio-item container rendered", () => {
      expect(screen.queryByTestId("portfolio-item")).toBeTruthy();
    });

    it("portfolio-item container have class", () => {
      expect(screen.queryByTestId("portfolio-item")).toHaveClass(
        "portfolio__item"
      );
    });

    it("portfolio-href container rendered", () => {
      expect(screen.queryByTestId("portfolio-href")).toBeTruthy();
    });

    it("portfolio-href container have class", () => {
      expect(screen.queryByTestId("portfolio-href")).toHaveAttribute(
        "id",
        "testId"
      );
    });

    it("portfolioItem have name", () => {
      expect(screen.queryByText("testName")).toBeTruthy();
    });

    it("PreviewButton rendered", () => {
      expect(screen.queryByTestId("preview-button-container")).not.toBeTruthy();
    });

    it("GifPreview rendered", () => {
      expect(screen.queryByTestId("gif-preview")).not.toBeTruthy();
    });

    it("desctiption rendered", () => {
      expect(screen.queryByTestId("description")).toBeTruthy();
    });

    it("ButtonsContainer container rendered", () => {
      expect(screen.queryByTestId("buttons-container")).toBeTruthy();
    });
  });
});
