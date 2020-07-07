import React from "react";
import { render, cleanup } from "@testing-library/react";

import About from "./index";

afterEach(cleanup);

describe("About component tests: ", () => {
  describe("<About mobile={true} show={true} text='test' loading='true'/>", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={true} show={true} text="test" loading={true} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass("about-container");
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).not.toBeTruthy();
    });
  });

  describe("<About mobile={true} show={true} text='test' loading={false} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={true} show={true} text="test" loading={false} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass("about-container");
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).not.toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).toBeTruthy();
    });
  });

  describe("<About mobile={false} show={true} text='test' loading={true} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={false} show={true} text="test" loading={true} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass(
        "about-container box about-container--reverse-animation"
      );
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).not.toBeTruthy();
    });
  });

  describe("<About mobile={false} show={true} text='test' loading={false} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={false} show={true} text="test" loading={false} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass(
        "about-container box about-container--reverse-animation"
      );
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).not.toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).toBeTruthy();
    });
  });

  describe("<About mobile={true} show={false} text='test' loading={true} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={true} show={false} text="test" loading={true} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass("about-container");
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).not.toBeTruthy();
    });
  });

  describe("<About mobile={true} show={false} text='test' loading={false} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={true} show={false} text="test" loading={false} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass("about-container");
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).not.toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).toBeTruthy();
    });
  });

  describe("<About mobile={false} show={false} text='test' loading={true} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={false} show={false} text="test" loading={true} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass(
        "about-container box about-container--animation"
      );
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).not.toBeTruthy();
    });
  });

  describe("<About mobile={false} show={false} text='test' loading={false} />", () => {
    let rendered;
    beforeEach(() => {
      rendered = render(
        <About mobile={false} show={false} text="test" loading={false} />
      );
    });

    it("container render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toBeTruthy();
    });

    it("container className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("about-container")).toHaveClass(
        "about-container box about-container--animation"
      );
    });

    it("title render(<BlockTitle />)", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("title")).toBeTruthy();
    });

    it("loader render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("loader")).not.toBeTruthy();
    });

    it("description not render", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("description")).toBeTruthy();
    });
  });
});
