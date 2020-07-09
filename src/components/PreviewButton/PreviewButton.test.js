import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { PreviewButton } from "components";

afterEach(cleanup);

describe("Preview button test", () => {
  const onClick = jest.fn();
  let rendered;

  describe("active={true}", () => {
    beforeEach(() => {
      onClick.mockClear();
      rendered = render(
        <PreviewButton
          _id="testId"
          active={true}
          onClick={onClick}
          className="testClassName"
        />
      );
    });

    it("<a/> exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toBeTruthy();
    });

    it("<a/> href", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toHaveAttribute(
        "href",
        `#testId`
      );
    });

    it("<a/> className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toHaveClass(
        "df preview-button preview-button--active testClassName"
      );
    });

    it("<a/> onClick", () => {
      const { queryByTestId } = rendered;
      fireEvent.click(queryByTestId("preview-button-container"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("<p/> exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-text")).toBeTruthy();
    });

    it("<p/> inside <a/>", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-text").closest("a")).toBeTruthy();
    });

    it("<p/> have text", () => {
      const { queryByText } = rendered;
      expect(queryByText("Preview")).toBeTruthy();
    });

    it("<Icon/>(svg) exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-svg")).toBeTruthy();
    });

    it("<Icon/>(svg) inside <a/>", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-svg").closest("a")).toBeTruthy();
    });
  });

  describe("active={true}", () => {
    beforeEach(() => {
      onClick.mockClear();
      rendered = render(
        <PreviewButton
          _id="testId"
          active={false}
          onClick={onClick}
          className="testClassName"
        />
      );
    });

    it("<a/> exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toBeTruthy();
    });

    it("<a/> href", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toHaveAttribute(
        "href",
        `#testId`
      );
    });

    it("<a/> className", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-container")).toHaveClass(
        "df preview-button testClassName"
      );
    });

    it("<a/> onClick", () => {
      const { queryByTestId } = rendered;
      fireEvent.click(queryByTestId("preview-button-container"));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it("<p/> exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-text")).toBeTruthy();
    });

    it("<p/> inside <a/>", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-text").closest("a")).toBeTruthy();
    });

    it("<p/> have text", () => {
      const { queryByText } = rendered;
      expect(queryByText("Preview")).toBeTruthy();
    });

    it("<Icon/>(svg) exist", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-svg")).toBeTruthy();
    });

    it("<Icon/>(svg) inside <a/>", () => {
      const { queryByTestId } = rendered;
      expect(queryByTestId("preview-button-svg").closest("a")).toBeTruthy();
    });
  });
});
