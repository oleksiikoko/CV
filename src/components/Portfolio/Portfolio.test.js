import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import { Portfolio } from "components";
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

  describe("loading mobile show", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={true}
          mobile={true}
          show={true}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--mobile"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).not.toBeTruthy();
    });
  });

  describe("loading mobile", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={true}
          mobile={true}
          show={false}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--mobile"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).not.toBeTruthy();
    });
  });

  describe("mobile show", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={false}
          mobile={true}
          show={true}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--mobile"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).not.toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).toBeTruthy();
    });
  });

  describe("mobile", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={false}
          mobile={true}
          show={false}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--mobile"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).not.toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).toBeTruthy();
    });
  });

  describe("show", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={false}
          mobile={false}
          show={true}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--reverse-animation"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).not.toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).toBeTruthy();
    });
  });

  describe("all false", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={false}
          mobile={false}
          show={false}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container portfolio-container--animation"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).not.toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).toBeTruthy();
    });
  });

  describe("loading show", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={true}
          mobile={false}
          show={true}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container--reverse-animation"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).not.toBeTruthy();
    });
  });

  describe("loading", () => {
    beforeEach(() => {
      render(
        <Portfolio
          portfolioItems={portfolioItems}
          loading={true}
          mobile={false}
          show={false}
        />
      );
    });

    it("portfolio rendered", () => {
      expect(screen.queryByTestId("portfolio")).toBeTruthy();
    });

    it("portfolio class", () => {
      expect(screen.queryByTestId("portfolio")).toHaveClass(
        "box portfolio-container portfolio-container--animation"
      );
    });

    it("portfolio BlockTitle rendered", () => {
      expect(screen.queryByTestId("block-title")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toBeTruthy();
    });

    it("portfolio container rendered", () => {
      expect(screen.queryByTestId("portfoio-container")).toHaveClass(
        "portfolio"
      );
    });

    it("portfolio loader", () => {
      expect(screen.queryByTestId("loader")).toBeTruthy();
    });

    it("portfolio items rendering", () => {
      expect(screen.queryByTestId("portfolio-items")).not.toBeTruthy();
    });
  });
});
